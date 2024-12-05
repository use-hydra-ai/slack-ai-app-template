import { AllMiddlewareArgs } from "@slack/bolt";

import { GenerateComponentResponse } from "@hydra-ai/slack/dist/hydra-ai/model/generate-component-response";
import { SlackEventMiddlewareArgs } from "@slack/bolt";
import { registerComponents } from "../../hydra-config";

export const hydraMessageCallback = async ({
    message,
    say,
    client,
}: AllMiddlewareArgs & SlackEventMiddlewareArgs<'message'>) => {
    // Store the message ts for updates
    let progressMessageTs: string;

    const handleProgressUpdate = async (progress: GenerateComponentResponse) => {
        if (!progressMessageTs) return;

        try {
            await client.chat.update({
                channel: message.channel,
                ts: progressMessageTs,
                text: progress.message || "Thinking...",
                blocks: progress.component ? [
                    {
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: progress.message || "Thinking..."
                        }
                    },
                    ...progress.component
                ] : [
                    {
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: progress.message || "Thinking..."
                        }
                    }
                ]
            });
        } catch (error) {
            console.error('Error updating progress message:', error);
        }
    };

    const messageText = (message as any).text;
    try {
        // Store the initial message response
        const initialMessage = await client.chat.postMessage({
            channel: message.channel,
            text: "...",
            blocks: [{
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "_Thinking..._"
                }
            }]
        });

        // Save the timestamp for updates
        progressMessageTs = initialMessage.ts || "";

        const hydra = registerComponents((message as any).user);
        await hydra.generateComponent(messageText, handleProgressUpdate);
    } catch (error) {
        console.error(error);
    }
};