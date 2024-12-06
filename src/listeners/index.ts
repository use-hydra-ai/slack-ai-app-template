import type { App } from '@slack/bolt';
import messages from './messages';


const registerListeners = (app: App) => {
  messages.register(app);
};

export default registerListeners;
