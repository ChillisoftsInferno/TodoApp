export interface EnvironmentConfig {
  environment: "local" | "production" | "qa";
  defaultApiRoot: string;
  apiPort: number;
}
