import {Get} from '../../domain/decorator/Get';
import {ControllerDefinition} from '../../data/model/server/ControllerDefinition';
import {Controller} from '../../domain/decorator/Controller';
import {Request} from '../../data/model/server/Request';
import {Response} from '../../data/model/server/Response';
import {Post} from '../../domain/decorator/Post';
import {AddItemToCart} from '../../domain/useCase/cart/AddItemToCart';
import {productRepository} from '../factory/ProductRepositoryFactory';
import {shoppingCart} from '../factory/ShoppingCartFactory';
import {GetCart} from "../../domain/useCase/cart/GetCart";
import {cartRepository} from "../factory/CartRepositoryFactory";
import {CartDTO} from "../../data/dto/CartDTO";

@Controller('/cart')
export class CartController implements ControllerDefinition {
  @Get('/:cartId')
  public async getCart(req: Request, res: Response) {
    try {
      const cart = await new GetCart(shoppingCart, cartRepository).execute(req.params.cartId);
      res.send(new CartDTO(cart).execute());
    } catch (e) {
      res.status(400).send(e);
    }
  }

  @Post('/:cartId')
  public async addItemToCart(req: Request, res: Response) {
    try {
      const cart = await new AddItemToCart(productRepository, shoppingCart, cartRepository).execute({
        cartId: req.params.cartId,
        products: req.body.products,
      });
      res.send(new CartDTO(cart).execute());
    } catch (e) {
      res.status(400).send(e);
    }
  }
}
