import type { App } from '@slack/bolt';
import cancelFormCallback from './task-form/cancel-form';
import saveTaskFormCallback from './task-form/save-task-form';
import completeTaskCallback from './task-list/complete-task';

const register = (app: App) => {
    app.action('cancel_form', cancelFormCallback);
    app.action('save_task_form', saveTaskFormCallback);
    app.action('complete_task', completeTaskCallback);
};

export default { register };
