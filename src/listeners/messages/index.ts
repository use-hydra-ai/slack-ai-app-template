import type { App } from '@slack/bolt';
import { helloMessageCallback } from './hello-message';

const register = (app: App) => {
  app.message('hello', helloMessageCallback);
};

export default { register };
