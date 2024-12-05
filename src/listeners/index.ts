import type { App } from '@slack/bolt';
import actions from './actions';
import messages from './messages';


const registerListeners = (app: App) => {
  actions.register(app);
  messages.register(app);
};

export default registerListeners;
