# Hydra AI  Slack App

This app uses Hydra AI to process user messages and dynamically show UI components in Slack based on what the user is trying to do.

Quickstart:

0. Follow instructions here to install the app in your Slack workspace: [slack app setup instructions](https://github.com/slack-samples/bolt-ts-starter-template?tab=readme-ov-file#create-a-slack-app)
1. Setup your `.env` file:

   The app requires the following environment variables for Hydra:

   - `HYDRA_API_KEY`: Your Hydra AI API key, which you can generate [here](https://usehydra.ai/dashboard)
   - `SLACK_BOT_TOKEN`: Should be setup during step 0 above.
   - `SLACK_APP_TOKEN`: Should be setup during step 0 above.

1. `npm install`
2. `npm start`
3. Add the app to a channel and try sending a message like 

## Concept

Conceptually, Hydra is designed to simplify how to build AI into apps. Instead of trying to think through all the complexeties of AI systems, the app design flow when using Hydra is:

1. Define what actions a user should be able to perform. Often this just means defining what data structures your app will store, and what actions you want the user to be able to perform on that data.
2. Define the UI components that are needed to perform those actions, where each component has props, or parameters, that allow different options for usage.
3. Register those components with Hydra.
4. Let Hydra choose and show the appropriate components dynamically based on the user's input messages.

 Here's how it works in this template:

**Define Actions**
**Component Definitions**

**Register Components**

**Let Hydra do the rest**

We set up a message listener that sends all messages to Hydra, and lets Hydra add generated components to the message response.

## Project Structure:

