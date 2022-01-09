import 'reflect-metadata';
import { FastifyAdapter } from './adapter/server/FastifyAdapter';
import { App } from './App';
import { CartController } from './main/web/CartController';

const PORT = process.env.SERVER_PORT || '3000';
const HOST = process.env.SERVER_HOST || '0.0.0.0';

export const bootstrap = async () => {
  const fastifyAdapter = new FastifyAdapter(PORT, HOST);
  const server = new App(fastifyAdapter, [CartController]);
  await server.start();
};

bootstrap();
