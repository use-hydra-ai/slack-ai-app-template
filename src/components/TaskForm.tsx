import { Actions, Blocks, Button, Input, JSXSlack } from 'jsx-slack';
import { Task } from '../types/Task';

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
                <Button value="not started">Not Started</Button>
                <Button value="complete">Complete</Button>
            </Actions>
            <Actions>
                <Button style="primary">
                    {isEditing ? 'Update Task' : 'Create Task'}
                </Button>
            </Actions>
        </Blocks>
    );
}; 