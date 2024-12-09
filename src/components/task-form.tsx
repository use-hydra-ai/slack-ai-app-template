import { Actions, Blocks, Button, Input, JSXSlack } from 'jsx-slack';

interface TaskFormProps {
    taskId?: string;
    name?: string;
    isEditing?: boolean;
}

export const TaskForm = ({ taskId, name = '', isEditing = false }: TaskFormProps) => {
    return JSXSlack(
        <Blocks>
            <Input
                type="text"
                name="name"
                blockId="taskName"
                label="Task Name"
                placeholder="Enter task name"
                value={name}
                required
            />
            <Actions>
                <Button
                    style="primary"
                    value={JSON.stringify({ taskId: taskId || undefined })}
                    actionId="save_task_form"
                >
                    {isEditing ? 'Update' : 'Create'}
                </Button>
                <Button
                    style="danger"
                    value="cancel_form"
                    actionId="cancel_form"
                >
                    Cancel
                </Button>
            </Actions>
        </Blocks>
    );
}; 