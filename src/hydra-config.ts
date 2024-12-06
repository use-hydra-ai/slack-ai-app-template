import { HydraClient } from "@hydra-ai/slack";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";


const taskPropsDefinition = `
{
  id: string;
  name: string;
  status: 'not started' | 'complete';
}
`;

export function registerComponents(userId: string) {
  const hydra = new HydraClient({
    hydraApiKey: process.env.HYDRAAI_API_KEY,
  });

  hydra.registerComponent({
    name: 'task-form',
    description: 'A form to create or edit a task',
    component: TaskForm,
    propsDefinition: {
      task: taskPropsDefinition,
    },
  });

  hydra.registerComponent({
    name: 'task-list',
    description: 'A list of tasks',
    component: TaskList,
    propsDefinition: {
      tasks: `${taskPropsDefinition}[]`,
    },
  });

  return hydra;
}
