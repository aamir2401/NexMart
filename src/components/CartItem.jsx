
// import { MdOutlineAutoDelete } from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import {toast} from 'react-hot-toast'

// const CartItem = ({item, itemIndex}) => {
  
//     const dispatch = useDispatch();
//     const removeFromCart = () =>
//     {
//       dispatch(remove(item.id));
//       toast.success("item Removed")
//     }
  
//   return(
//     <div>
//       {
//         <div>
//            <div>
//            <img src={item.image}  alt="nothing"/>
//            </div>
//            <div>
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>         
//            </div>
//            <div>
//            <p>{item.price}</p>
//            <button onClick={removeFromCart}>
//                <MdOutlineAutoDelete/>
//            </button>
//            </div>
//         </div>
        
//       }
//     </div>
//   )
// };

// export default CartItem;



import { MdOutlineAutoDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="nothing" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <p>{item.price}</p>
          <button onClick={removeFromCart}>
            <MdOutlineAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
