import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
const Cart = () => {

  const cart = useEffect( (state) => state)
  return(
    <div>
      {
        cart.length > 0 ? 
        (
          <div>
               {
                cart.map( (item, index) =>
                {
                  return <CartItem/>
                })
               }
          </div>
        ) :
        (<div>
          <h1>Cart is empty</h1>
          <NavLink to="/">
          <button>
            Shop Now
          </button>
          </NavLink>
          
          </div>)
      }
    </div>
  )
};

export default Cart;
