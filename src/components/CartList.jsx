import { contexto } from "./miContexto";
import { useContext } from "react";
import Card from "react-bootstrap/Card";

export default function CartList() {
  const { cantidad, cart } = useContext(contexto);

  return (
    <div className="tarjetaCarrito">
      <Card>
        <Card.Body>Tu carro tiene {cantidad} productos</Card.Body>
      </Card>
      {cart.map((x) => 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={x.product.image} />
      <Card.Body>
        <Card.Title>{x.product.title}</Card.Title>
        <Card.Text>
         Tienes {x.count} articulos de este producto en tu carrito
        </Card.Text>
      </Card.Body>
    </Card>
  )}
    </div>
  );
}
