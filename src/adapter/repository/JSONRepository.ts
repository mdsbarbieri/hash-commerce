import repository from '../../../db/products.json';
import { Repository } from '../../data/model/repository/Repository';
import { Product } from '../../data/model/product/Product';
import { BusinessError } from '../../domain/error/BusinessError';

export class JSONRepository implements Repository<any> {
  async getById(id: string) {
    return repository.find((product: any) => product.id === +id) as any;
  }

  set(id: string, data: any): Promise<Product> {
    throw new BusinessError('Can not performe this operation');
  }
}
