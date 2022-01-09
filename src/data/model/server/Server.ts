export interface Server<T> {
  init(): Promise<void>;

  stop(): Promise<void>;

  get(path: string, handler: Function): void;

  post(path: string, handler: Function): void;

  getServer(): T;
}
