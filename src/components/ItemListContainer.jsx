import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../api/productos";
import { Container, Stack, Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const data = await getProducts(id);
    setProducts(data);
    data && setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Stack direction="horizontal" gap={5}>
          <ItemList products={products} />
        </Stack>
      )}
    </Container>
  );
};

export default ItemListContainer;
