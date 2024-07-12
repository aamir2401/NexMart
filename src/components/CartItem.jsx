
import { MdOutlineAutoDelete } from "react-icons/md";

const CartItem = ({item, itemindex}) => {
  return(
    <div>
      {
        <div>
           <div>
           <img src={item.image}  alt="nothing"/>
           </div>
           <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            
           </div>
           <div>
           <p>{item.price}</p>
           <button>
               <MdOutlineAutoDelete/>
           </button>
           </div>
        </div>
        
      }
    </div>
  )
};

export default CartItem;
