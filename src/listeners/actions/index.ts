import type { App } from '@slack/bolt';
import cancelFormCallback from './task-form/cancel-form';
import saveTaskFormCallback from './task-form/save-task-form';

const register = (app: App) => {
    app.action('cancel_form', cancelFormCallback);
    app.action('save_task_form', saveTaskFormCallback);
};

export default { register };
