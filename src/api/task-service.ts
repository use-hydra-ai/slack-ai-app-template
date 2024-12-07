import { Task } from '../types/task';

// In-memory storage for tasks (replace with database in production)
const taskStore: Task[] = [
    {
        id: '1',
        name: 'Setup development environment',
        status: 'complete'
    },
    {
        id: '2',
        name: 'Review project requirements',
        status: 'not started'
    },
    {
        id: '3',
        name: 'Create initial project structure',
        status: 'complete'
    }
];

export const createTask = (task: Omit<Task, 'id'>): Task => {
    const newTask: Task = {
        ...task,
        id: generateTaskId(),
    };

    taskStore.push(newTask);
    return newTask;
};

export const getTasks = (): Task[] => {
    return taskStore;
};

export const getTask = (taskId: string): Task | undefined => {
    return taskStore.find(task => task.id === taskId);
};

export const updateTask = (taskId: string, updates: Partial<Omit<Task, 'id'>>): Task => {
    const taskIndex = taskStore.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        throw new Error('Task not found');
    }

    const updatedTask: Task = {
        ...taskStore[taskIndex],
        ...updates,
    };

    taskStore[taskIndex] = updatedTask;
    return updatedTask;
};

export const deleteTask = (taskId: string): boolean => {
    const taskIndex = taskStore.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        return false;
    }

    taskStore.splice(taskIndex, 1);
    return true;
};

// Helper function to generate unique task IDs
export const generateTaskId = (): string => {
    return Math.random().toString(36).substr(2, 9);
}; 