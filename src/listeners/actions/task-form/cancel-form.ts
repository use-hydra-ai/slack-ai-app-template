import { BlockAction, ButtonAction } from "@slack/bolt";

import { SlackActionMiddlewareArgs } from "@slack/bolt";

import { AllMiddlewareArgs } from "@slack/bolt";

const cancelFormCallback = async ({ ack, respond, body }: AllMiddlewareArgs & SlackActionMiddlewareArgs<BlockAction<ButtonAction>>) => {
    await ack();
    await respond({
        delete_original: true,
        text: "Canceled!"
    });
};

export default cancelFormCallback;
