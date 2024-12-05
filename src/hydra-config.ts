import { HydraClient } from "@hydra-ai/slack";


export function registerComponents(userId: string) {
  const hydra = new HydraClient({
    hydraApiKey: process.env.HYDRAAI_API_KEY,
  });

  return hydra;
}
