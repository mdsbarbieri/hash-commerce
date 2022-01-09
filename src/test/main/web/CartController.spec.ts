import { CartController } from '../../../main/web/CartController';
import { initializeTestEnvironment } from '../../helper';

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
});
