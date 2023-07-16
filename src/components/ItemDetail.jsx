import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "../images/mouse.jfif";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";

const ItemDetail = (props) => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.product.image} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
          {props.product.description}
        </Card.Text>
        <Card.Text>Costo : {props.product.cost}</Card.Text>
        <ButtonGroup aria-label="Qty">
          <Button variant="secondary" onClick={() => removeCount()}>
            -
          </Button>
          <Form.Control size="sm" type="text" placeholder={count} />
          <Button variant="secondary" onClick={() => addCount()}>
            +
          </Button>
        </ButtonGroup>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
