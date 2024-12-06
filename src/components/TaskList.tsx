import { Button, Divider, JSXSlack, Section } from 'jsx-slack';
import { Task } from '../types/Task';

interface TaskListProps {
    tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
    const getStatusEmoji = (status: Task['status']) => {
        switch (status) {
            case 'not started': return '⭕';
            case 'in progress': return '🔄';
            case 'complete': return '✅';
            default: return '❓';
        }
    };


    return JSXSlack(
        <>
            {tasks.map((task, index) => (
                <>
                    <Section>
                        <b>{getStatusEmoji(task.status)} {task.name}</b>
                        <Section>
                            <Button value={`status:${task.id}:not started`}
                                style={task.status === 'not started' ? 'primary' : undefined}>
                                Not Started
                            </Button>
                            <Button value={`status:${task.id}:in progress`}
                                style={task.status === 'in progress' ? 'primary' : undefined}>
                                In Progress
                            </Button>
                            <Button value={`status:${task.id}:complete`}
                                style={task.status === 'complete' ? 'primary' : undefined}>
                                Complete
                            </Button>
                        </Section>
                        <Button value={`edit:${task.id}`} style="primary">
                            Edit
                        </Button>
                        <Button value={`delete:${task.id}`} style="danger">
                            Delete
                        </Button>
                    </Section>
                    {index < tasks.length - 1 && <Divider />}
                </>
            ))
            }
            {
                tasks.length === 0 && (
                    <Section>No tasks found</Section>
                )
            }
        </>
    );
}; 