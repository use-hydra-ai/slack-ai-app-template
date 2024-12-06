import { Actions, Blocks, Button, Context, Divider, Header, JSXSlack, Section } from 'jsx-slack';
import { Task } from '../types/task';

interface TaskListProps {
    tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
    const getStatusEmoji = (status: Task['status']) => {
        switch (status) {
            case 'not started': return '⭕';
            case 'complete': return '✅';
            default: return '❓';
        }
    };


    return JSXSlack(
        <Blocks>
            <Header>Tasks</Header>
            <Divider />
            {tasks.map((task, index) => (
                <>
                    <Header>
                        {getStatusEmoji(task.status)} <b>{task.name}</b>
                    </Header>

                    {task.status === 'complete' ? (
                        <Context>done!</Context>
                    ) : (
                        <Actions>
                            <Button value={`status:${task.id}:complete`}
                                style={'primary'}>
                                Complete
                            </Button>
                        </Actions>
                    )}
                    <Actions>
                        <Button value={`edit:${task.id}`} style="primary">
                            Edit
                        </Button>
                        <Button value={`delete:${task.id}`} style="danger">
                            Delete
                        </Button>
                    </Actions>
                    {index < tasks.length - 1 && <Divider />}
                </>
            ))
            }
            {
                tasks.length === 0 && (
                    <Section>No tasks found</Section>
                )
            }
        </Blocks>
    );
}; 