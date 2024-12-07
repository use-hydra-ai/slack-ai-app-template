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

    // Sort tasks - 'not started' first, then 'complete'
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.status === 'not started' && b.status === 'complete') return -1;
        if (a.status === 'complete' && b.status === 'not started') return 1;
        return 0;
    });

    return JSXSlack(
        <Blocks>
            <Header>Tasks</Header>
            <Divider />
            {sortedTasks.map((task, index) => (
                <>
                    <Header>
                        {getStatusEmoji(task.status)} <b>{task.name}</b>
                    </Header>

                    {task.status === 'complete' ? (
                        <Context>done!</Context>
                    ) : (
                        <Actions>
                            <Button actionId="complete_task" value={JSON.stringify({ taskId: task.id })}
                                style={'primary'}>
                                Done?
                            </Button>
                        </Actions>
                    )}
                    <Actions>
                        <Button value={`edit:${task.id}`}>
                            Edit
                        </Button>
                        <Button value={`delete:${task.id}`} style="danger">
                            Delete
                        </Button>
                    </Actions>
                    {index < sortedTasks.length - 1 && <Divider />}
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