// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import CartItem from '../components/CartItem'
// import { useSelector } from "react-redux";
// const Cart = (post) => {
//   const [totalAmount, setTotalAmount] = useState(0)
//   const cart = useSelector( (state) => state)
//   useEffect( () =>
//   {
//     setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0))
//   },[cart])
 
//   return(
//     <div>
//       {
//         post.length > 0 ? 
//         (
//           <div>
//                {
//                 cart.map( (item, index) =>
//                 {
//                   return <CartItem key={item.id} itemindex ={item}/>
//                 })
//                }

//              {
//               <div>
//                  <div>Your Cart</div>
//                  <div>Summary</div>

//                  <p>
//                   <span>Total Items: {cart.length}</span>
//                   </p>

//                   <div>
//                     <p>Total Amount:{totalAmount}</p>
//                     <button>
//                       CheckOut Now!
//                     </button>
//                   </div>
//               </div>
//              }



//           </div>
//         ) :
//         (<div>
//           <h1>Cart is empty</h1>
//           <NavLink to="/">
//           <button>
//             Shop Now
//           </button>
//           </NavLink>
          
//           </div>)
//       }
//     </div>
//   )
// };

// export default Cart;






import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem';

const Cart = ({ post }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cart, setCart] = useState(post);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items: {cart.length}</span>
            </p>
            <div>
              <p>Total Amount: {totalAmount}</p>
              <button>CheckOut Now!</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart is empty</h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
