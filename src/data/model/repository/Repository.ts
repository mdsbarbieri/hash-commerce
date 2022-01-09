export interface Repository {
  getById(id: number): Promise<any>;
}
