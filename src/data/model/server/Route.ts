import { HttpMethodsEnum } from '../../enum/HttpMethodsEnum';

export interface RouteDefinition {
  path: string;
  requestMethod: HttpMethodsEnum;
  methodName: string;
}
