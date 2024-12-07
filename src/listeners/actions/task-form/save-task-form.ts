import { AllMiddlewareArgs, BlockAction, ButtonAction, SlackActionMiddlewareArgs } from "@slack/bolt";
import { createTask, generateTaskId, updateTask } from "../../../api/task-service";
import { Task } from "../../../types/task";

const saveTaskFormCallback = async ({ ack, respond, body }: AllMiddlewareArgs & SlackActionMiddlewareArgs<BlockAction<ButtonAction>>) => {
    await ack();
    if (body.actions[0].value) {
        const taskId = JSON.parse(body.actions[0].value).taskId;
        const stateValues = body.state?.values;
        const taskName = Object.values(stateValues?.taskName || {})[0]?.value || '';

        if (!taskId) {
            const task: Task = {
                id: generateTaskId(),
                name: taskName,
                status: 'not started',
            };
            await createTask(task);
        } else {
            const task: Task = {
                id: taskId,
                name: taskName,
                status: 'not started',
            };
            await updateTask(taskId, task);
        }
        await respond({
            delete_original: true,
            text: "✅ Task saved!"
        });
    }
};

export default saveTaskFormCallback;