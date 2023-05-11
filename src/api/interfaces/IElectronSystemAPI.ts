export interface IElectronSystemAPI {
  // Core
  restartApp(): void;

  // General Purpose
  setTitle(title: string): Promise<void>;
}
