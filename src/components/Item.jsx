import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;