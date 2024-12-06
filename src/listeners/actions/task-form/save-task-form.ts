import { AllMiddlewareArgs, BlockAction, ButtonAction, SlackActionMiddlewareArgs } from "@slack/bolt";

const saveTaskFormCallback = async ({ ack, body }: AllMiddlewareArgs & SlackActionMiddlewareArgs<BlockAction<ButtonAction>>) => {
    await ack();
};

export default saveTaskFormCallback;