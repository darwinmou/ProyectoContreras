import { useContext } from "react";
import { contexto } from "./miContexto";

 const CartWidget = () => {
  const {cantidad} = useContext(contexto)

    return (
    <div className="cart-widget">
      <span className="material-symbols-outlined">shopping_cart</span>
    <div className="numero" >{cantidad}</div>
    </div>
    )
  };
  export default CartWidget