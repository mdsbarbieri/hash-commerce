import { FastifyAdapter } from './adapter/server/FastifyAdapter';

const PORT = process.env.SERVER_PORT || '3000';
const HOST = process.env.SERVER_HOST || '0.0.0.0';

export const bootstrap = async () => {
  const fastifyAdapter = new FastifyAdapter(PORT, HOST);
  await fastifyAdapter.init();
};

bootstrap();
