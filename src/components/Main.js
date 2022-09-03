import { addToCart, emptycart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/producrAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data =useSelector((state)=>state.productData)
  console.warn("data in Main Component.... from saga",data);
  
  useEffect(() => {
   dispatch(productList()) 
  }, [])
  
  return (
    <div>
      
      <div>

      <button onClick={() => dispatch(emptycart())}>Clear Cart</button>
      </div>
 
      <div className="product-container">
        {
          data.map((item,i)=><div key={i} className='product-item'>
            <img style={{width:"150px"}} src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

              </div>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default Main;