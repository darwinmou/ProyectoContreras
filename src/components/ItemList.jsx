import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      {props.products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
};

export default ItemList;
