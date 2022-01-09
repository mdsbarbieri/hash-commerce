import { FastifyAdapter } from '../adapter/server/FastifyAdapter';

require('dotenv').config({ path: '.env.test' });

export const initializeTestEnvironment = () => {
  const fastifyAdapter = new FastifyAdapter('3002');

  beforeAll(async () => {
    await fastifyAdapter.init();
  });

  afterAll(async () => await fastifyAdapter.stop());

  return fastifyAdapter;
};
