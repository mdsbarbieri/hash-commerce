import {CartController} from '../../../main/web/CartController';
import {initializeTestEnvironment} from '../../helper';

describe('Cart Controller', () => {
  const adapter = initializeTestEnvironment([CartController]);
  const app = adapter.getServer();

  it('checks if server start properly', async () => {
    const res = await app.inject({
      url: '/cart/123',
      method: 'GET',
    });
    expect(JSON.parse(res.payload)).toBeDefined();
  });

  it('checks if add product to cart is working properly', async () => {
    const res = await app.inject({
      url: '/cart/123',
      method: 'POST',
      payload: {
        "products": [
          {
            "id": 1,
            "quantity": 12
          }
        ]
      }
    });
    expect(JSON.parse(res.payload).products.length).toBeGreaterThan(0);
  });
});
