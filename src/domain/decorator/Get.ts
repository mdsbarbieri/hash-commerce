import { RouteDefinition } from '../../data/model/server/Route';
import { HttpMethodsEnum } from '../../data/enum/HttpMethodsEnum';

export const Get = (path: string): MethodDecorator => {
  return (target, propertyKey: string | symbol): void => {
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }

    const routes = Reflect.getMetadata('routes', target.constructor) as Array<RouteDefinition>;

    routes.push({
      requestMethod: HttpMethodsEnum.GET,
      path,
      methodName: propertyKey.toString(),
    });
    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};
