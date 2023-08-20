import { createContext, useState, useEffect, useCallback } from "react";
export const contexto = createContext();

const Provider = contexto.Provider;

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarAlCarrito = (nuevoItem) => {
  
    if (!cart.length) {
      return setCart([nuevoItem]);
    }

    const existingItem = cart.find(
      (x) => x.product.id === nuevoItem.product.id
    );


    if (existingItem) {
      const newCart = cart.map((x) =>
        x.product.id === nuevoItem.product.id
          ? { ...x, count: x.count + nuevoItem.count }
          : x
      );
      setCart(newCart);
    } else {
      setCart([...cart, nuevoItem]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCart(
      cart.filter(function (cartElement) {
        return cartElement.id !== id;
      })
    );
  };

  const modificarCantidad = useCallback(() => {
    setCantidadTotal(
      cart.reduce((acum, valorActual) => acum + valorActual.count, 0)
    );
  }, [cart]);

  useEffect(() => {
    modificarCantidad();
  }, [modificarCantidad]);

  const valorDelContexto = {
    cart: cart,
    agregarAlCarrito,
    eliminarDelCarrito,
    cantidad: cantidadTotal,
  };

  return <Provider value={valorDelContexto}> {props.children} </Provider>;
}
