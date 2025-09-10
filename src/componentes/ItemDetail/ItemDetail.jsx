import "./ItemDetail.css"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const ItemDetail = ({id, nombre, precio, img, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad)
  }

  return (
    <div className="contenedorItem">
        <div className="item-header">
            <h2>Detalle del Producto</h2>
        </div>
        
        <div className="item-content">
            <div className="item-image">
                <img src={img} alt={nombre} />
            </div>
            
            <div className="item-info">
                <h2>Nombre: {nombre}</h2>
                <h3 className="precio-detail">Precio: ${precio}</h3>
                <h3 className="id-detail">ID: {id}</h3>
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit exercitationem ab non perspiciatis reprehenderit facere! Quae perspiciatis laudantium officia? Minus, facilis molestias? Ex et eos nisi illum alias suscipit! Este producto es perfecto para complementar tu estilo y añadir un toque especial a tu look diario.</p>
            
            <div className="contador-centrado">
            {
                agregarCantidad > 0 ?(<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail