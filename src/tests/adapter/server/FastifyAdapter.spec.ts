import { initializeTestEnvironment } from '../../helper';

describe('Fastify Adapter', () => {
  const adapter = initializeTestEnvironment();
  const app = adapter.getServer();

  it('checks if server start properly', async () => {
    const res = await app.inject({
      url: '/health',
      method: 'GET',
    });
    expect(JSON.parse(res.payload)).toEqual({ status: 'ok' });
  });
});
