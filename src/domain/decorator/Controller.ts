export const Controller = (path: string = ''): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata('path', path, target);

    if (!Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target);
    }
  };
};
