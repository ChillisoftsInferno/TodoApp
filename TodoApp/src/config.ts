import type { EnvironmentConfig } from "./environment";

export const environmentConfig: EnvironmentConfig = {
  environment: import.meta.env.VITE_ENV,
  defaultApiRoot: import.meta.env.VITE_DEFAULT_API_ROOT,
  apiPort: Number(import.meta.env.VITE_AUTH_API_PORT),
};
