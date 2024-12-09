import { HydraClient } from "@hydra-ai/slack";
import { ComponentContextTool } from "@hydra-ai/slack/dist/hydra-ai/model/component-metadata";
import { getTasks, getTasksByIds } from "./api/task-service";
import { TaskForm } from "./components/task-form";
import { TaskFormLoading } from "./components/task-form-loading";
import { TaskList } from "./components/task-list";
import { TaskListLoading } from "./components/task-list-loading";


const editTaskPropsDefinition = {
  taskId: 'string',
  name: 'string',
  isEditing: 'boolean == true',
}

const createTaskPropsDefinition = {
  name: 'string',
}

export function registerComponents() {
  const hydra = new HydraClient({
    hydraApiKey: process.env.HYDRAAI_API_KEY,
  });

  hydra.registerComponent({
    name: 'create-task-form',
    description: 'A form to create a new task',
    component: TaskForm,
    propsDefinition: createTaskPropsDefinition,
    contextTools: [tasksContextTool],
    loadingComponent: TaskFormLoading,
  });

  hydra.registerComponent({
    name: 'edit-task-form',
    description: 'A form to edit an existing task. Use this whenever the user wants to edit or update a task.',
    component: TaskForm,
    propsDefinition: editTaskPropsDefinition,
    contextTools: [tasksContextTool],
    loadingComponent: TaskFormLoading,
  });

  hydra.registerComponent({
    name: 'task-list',
    description: 'A list of tasks',
    component: TaskList,
    propsDefinition: {
      taskIdList: 'string[]',
    },
    contextTools: [tasksContextTool],
    loadingComponent: TaskListLoading,
    generateProps: async (context: { taskIdList: string[] }) => {
      const tasks = await getTasksByIds(context.taskIdList);
      return { tasks: tasks };
    },
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
