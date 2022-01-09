export interface Repository<T> {
  getById(id: string): Promise<T | any>;

  set(id: string, data: T): Promise<T | any>;
}
