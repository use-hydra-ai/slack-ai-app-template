import { HydraClient } from "@hydra-ai/slack";
import { ComponentContextTool } from "@hydra-ai/slack/dist/hydra-ai/model/component-metadata";
import { getTasks } from "./api/task-service";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";


const taskPropsDefinition = `
{
  id: string;
  name: string;
  status: 'not started' | 'complete';
}
`;

export function registerComponents() {
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
    contextTools: [tasksContextTool],
  });

  hydra.registerComponent({
    name: 'task-list',
    description: 'A list of tasks',
    component: TaskList,
    propsDefinition: {
      tasks: `${taskPropsDefinition}[]`,
    },
    contextTools: [tasksContextTool],
  });

  return hydra;
}


const tasksContextTool: ComponentContextTool = {
  getComponentContext: async () => {
    const tasks = await getTasks();
    return tasks;
  },
  definition: {
    name: "getAllTasks",
    description: "Gets the list of all tasks",
    parameters: [],
  }
}
