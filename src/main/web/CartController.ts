import { Get } from '../../domain/decorator/Get';
import { ControllerDefinition } from '../../data/model/server/ControllerDefinition';
import { Controller } from '../../domain/decorator/Controller';
import { Request } from '../../data/model/server/Request';
import { Response } from '../../data/model/server/Response';

@Controller('/cart')
export class CartController implements ControllerDefinition {
  @Get('/:cartId')
  public getCart(req: Request, res: Response) {
    res.send({ data: 'cart' });
  }
}
