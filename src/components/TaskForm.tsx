import { Actions, Blocks, Button, Input, JSXSlack } from 'jsx-slack';
import { Task } from '../types/task';

interface TaskFormProps {
    task?: Task;
    isEditing?: boolean;
}

export const TaskForm = ({ task, isEditing = false }: TaskFormProps) => {
    return JSXSlack(
        <Blocks>
            <Input
                type="text"
                name="name"
                label="Task Name"
                placeholder="Enter task name"
                value={task?.name}
                required
            />
            <Actions>
                <Button style="primary" value="save_task_form" actionId="save_task_form">
                    {isEditing ? 'Update Task' : 'Create Task'}
                </Button>
                <Button style="danger" value="cancel_form" actionId="cancel_form">Cancel</Button>
            </Actions>
        </Blocks>
    );
}; 