import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.image} />
      <Card.Body>
      <Badge bg="info">{props.product.category}</Badge>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
          Costo: {props.product.cost}
        </Card.Text>
        <Link to={`/item/${props.product.id}`}>
        <Button variant="primary">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item