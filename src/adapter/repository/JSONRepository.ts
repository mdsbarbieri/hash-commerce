import repository from '../../../db/products.json';
import { Repository } from '../../data/model/repository/Repository';

export class JSONRepository implements Repository {
  async getById(id: number) {
    return repository.find((product: any) => product.id === id);
  }
}
