import { Repository } from '../../data/model/repository/Repository';

export class ProductRepository {
  constructor(private readonly repository: Repository) {}

  async getById(id: number) {
    return this.repository.getById(id);
  }
}
