import { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';

export const helloMessageCallback = async ({
    message,
    say,
    client,
}: AllMiddlewareArgs & SlackEventMiddlewareArgs<'message'>) => {
    await say('Hello, world!');
};
