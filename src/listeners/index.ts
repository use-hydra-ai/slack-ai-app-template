import type { App } from '@slack/bolt';
import actions from './actions';
import messages from './messages';


const registerListeners = (app: App) => {
  messages.register(app);
  actions.register(app);
};

export default registerListeners;
