import { ProductRepository } from '../../../data/repository/ProductRepository';
import { JSONRepository } from '../../../adapter/repository/JSONRepository';

describe('ProductRepository', () => {
  const repository = new ProductRepository(new JSONRepository());

  it('validates if repository works properly', async () => {
    const res = await repository.getById('1');
    expect(res).toBeDefined();
  });

  it('validates if repository return null when product don´t exists', async () => {
    const res = await repository.getById('12341');
    expect(res).not.toBeDefined();
  });
});
