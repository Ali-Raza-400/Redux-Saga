import { addToCart, emptycart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'


function Main() {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div>
      <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        
      </div>
      <div>
      <button onClick={() => dispatch(removeToCart(product.name))}>Remove To Cart</button>

      </div>
      <div>

      <button onClick={() => dispatch(emptycart())}>Clear Cart</button>
      </div>
    </div>
  );
}

export default Main;