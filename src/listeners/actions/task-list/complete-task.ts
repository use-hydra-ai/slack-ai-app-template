import { AllMiddlewareArgs, BlockAction, ButtonAction, SlackActionMiddlewareArgs } from "@slack/bolt";
import { getTasks, updateTask } from "../../../api/task-service";
import { TaskList } from "../../../components/task-list";

const completeTaskCallback = async ({ ack, respond, body }: AllMiddlewareArgs & SlackActionMiddlewareArgs<BlockAction<ButtonAction>>) => {
    await ack();

    const value = body.actions[0].value;
    if (!value) return;

    const taskId = JSON.parse(value).taskId;

    if (taskId) {
        await updateTask(taskId, { status: 'complete' });

        const tasks = await getTasks();

        await respond({
            replace_original: true,
            blocks: TaskList({ tasks })
        });
    }
};

export default completeTaskCallback;
