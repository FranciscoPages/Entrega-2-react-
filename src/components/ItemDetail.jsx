const ItemDetail = ({ item }) => {
    return (
      <div>
        <h2>{item.name}</h2>
        <p>Precio: ${item.price}</p>
        <p>Categoría: {item.category}</p>
        <button>Agregar al carrito</button>
      </div>
    );
  };
  
  export default ItemDetail;