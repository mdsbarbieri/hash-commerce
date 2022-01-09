import { Server } from './data/model/server/Server';
import { RouteDefinition } from './data/model/server/Route';
import { HttpMethodsEnum } from './data/enum/HttpMethodsEnum';
import { FastifyInstance } from 'fastify';

export class App {
  constructor(private readonly server: Server<FastifyInstance>, private readonly controllerArray: any) {
    if (!controllerArray) {
      return;
    }
    controllerArray.forEach((controller: any) => {
      const controllerInstance = new controller();
      const prefix = Reflect.getMetadata('path', controller);
      const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller);

      routes.forEach((route) => {
        switch (route.requestMethod) {
          case HttpMethodsEnum.GET:
            this.server.get(prefix + route.path, (req: Request, res: Response) => {
              controllerInstance[route.methodName](req, res);
            });
            break;
          case HttpMethodsEnum.POST:
            this.server.post(prefix + route.path, (req: Request, res: Response) => {
              controllerInstance[route.methodName](req, res);
            });
            break;
          default:
            throw new Error('Method not implemented');
        }
      });
    });
  }

  async start() {
    await this.server.init();
  }

  async stop() {
    await this.server.stop();
  }
}
