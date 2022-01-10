import { FastifyAdapter } from '../adapter/server/FastifyAdapter';
import { App } from '../App';

let initialized = false;
export const initializeTestEnvironment = (port = '3001', controllerArray: any = []) => {
  const fastifyAdapter = new FastifyAdapter(port, '0.0.0.0', { logger: false });
  const server = new App(fastifyAdapter, controllerArray);

  beforeAll(async () => {
    if(initialized){
      return
    }
    await server.start();
    initialized = true;
  });

  afterAll(async () => {
    await server.stop()
    initialized = false;
  });

  return fastifyAdapter;
};
