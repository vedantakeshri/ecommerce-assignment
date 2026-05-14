import { createContext } from "react";
import cartStore from "../store/CartStore";

const CartContext = createContext(cartStore);

export default CartContext;