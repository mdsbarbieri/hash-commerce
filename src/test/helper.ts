import { FastifyAdapter } from '../adapter/server/FastifyAdapter';
import { App } from '../App';

export const initializeTestEnvironment = (controllerArray: any = []) => {
  const fastifyAdapter = new FastifyAdapter('3002');
  const server = new App(fastifyAdapter, controllerArray);

  beforeAll(async () => {
    await server.start();
  });

  afterAll(async () => await server.stop());

  return fastifyAdapter;
};
