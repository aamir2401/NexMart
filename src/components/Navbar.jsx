import { RiShoppingCart2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="bg-blue-400">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          
          <img src="https://99designs.com/inspiration/logos/ecommerce" />
          
        </NavLink>

        <div>
          <NavLink to="/">
           <p>Home</p>
          </NavLink>

           <NavLink to="/cart">
            <div>
            <RiShoppingCart2Fill />
            </div>
           </NavLink>
        </div>

      </div>
    </div>
  )
};

export default Navbar;
