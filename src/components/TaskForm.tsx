import { Blocks, Button, Input, JSXSlack, Select } from 'jsx-slack';
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
            <Select
                name="status"
                label="Status"
                value={task?.status || 'not started'}
            >
                <Button value="not started">Not Started</Button>
                <Button value="in progress">In Progress</Button>
                <Button value="complete">Complete</Button>
            </Select>
            <Button style="primary">
                {isEditing ? 'Update Task' : 'Create Task'}
            </Button>
        </Blocks>
    );
}; 