import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <div className="card-content">
        <h3>Nombre: {nombre}</h3>
        <p className="precio">Precio: ${precio}</p>
        <p className="producto-id">ID: {id}</p>
        <p className="producto-stock">Sotck: {stock}</p>
       <Link to={`/item/${id}`}><button>Ver Detalles</button></Link> 
      </div>
    </div>
  )
}

export default Item