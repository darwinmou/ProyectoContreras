import { useParams } from "react-router-dom";
import { getProductById } from "../api/productos";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [product, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const data = await getProductById(id);
    setProducts(data);
    data && setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          <Col>
            <ItemDetail product={product} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ItemDetailContainer;
