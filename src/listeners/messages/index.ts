import type { App } from '@slack/bolt';
import { hydraMessageCallback } from './hydra-message';

const register = (app: App) => {
  app.message(/.*/, hydraMessageCallback);
};

export default { register };
