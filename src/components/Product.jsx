// import { useDispatch, useSelector } from "react-redux";
// import {toast} from 'react-hot-toast'
// import { add, remove } from "../redux/Slices/CartSlice";
// const Product = ({post}) => {
//   const {Cart} = useSelector( (state) => state);
//   const dispatch = useDispatch();
//   const addToCart = () =>
//   {
//     dispatch(add(post));
//     toast.success("Item Added Successfully!")
//   }
//   const removeFromCart = () =>
//   {
//     dispatch(remove(post.id));
//     toast.error("Item Removed!!")
//   }
//   return(
//     <div>
//       {
//       <div>
//             <div>
//             <p>{post.title}</p>
//             </div>
//             <div>
//               <p>{post.description}</p>
//             </div>
//             <div>
//               <img src={post.image} />
//             </div>
            
//             <div className="flex flex-row justify-around">
//                <p>{post.price}</p>

//             </div>
//             {
//               Cart.some( (p) => p.id === post.id) ? 
//               (<button onClick={removeFromCart}>
//                 Remove Item
//               </button>) :
//               (
//                 <div>
//                    <button onClick={addToCart}> 
//                     Add to Cart
//                    </button>
//                 </div>
//               )
//             }
//       </div>
        

//       }
//     </div>
//   )
// };

// export default Product;





// import { useDispatch, useSelector } from "react-redux";
// import { toast } from 'react-hot-toast';
// import { add, remove } from "../redux/Slices/CartSlice";

// const Product = ({ post }) => {
//   // Correct the useSelector to directly fetch the cart array
//   const cart = useSelector((state) => state.Cart || []);
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(add(post));
//     toast.success("Item Added Successfully!");
//   };

//   const removeFromCart = () => {
//     dispatch(remove(post.id));
//     toast.error("Item Removed!!");
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <p>{post.title}</p>
//         </div>
//         <div>
//           <p>{post.description}</p>
//         </div>
//         <div>
//           <img src={post.image} alt={post.title} />
//         </div>
//         <div className="flex flex-row justify-around">
//           <p>{post.price}</p>
//         </div>
//         {
//           // Check if the item is in the cart
//           cart.some((p) => p.id === post.id) ? (
//             <button onClick={removeFromCart}>
//               Remove Item
//             </button>
//           ) : (
//             <button onClick={addToCart}> 
//               Add to Cart
//             </button>
//           )
//         }
//       </div>
//     </div>
//   );
// };

// export default Product;






import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast';
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.Cart || []);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added Successfully!");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed!!");
  };

  return (
    <div>
      <div>
        <div>
          <p>{post.title}</p>
        </div>
        <div>
          <p>{post.description}</p>
        </div>
        <div>
          <img src={post.image} alt={post.title} />
        </div>
        <div className="flex flex-row justify-around">
          <p>{post.price}</p>
        </div>
        {
          cart.some((item) => item.id === post.id) ? (
            <button onClick={removeFromCart}>
              Remove Item
            </button>
          ) : (
            <button onClick={addToCart}>
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;
