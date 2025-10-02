import "./ItemDetail.css"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import Swal from 'sweetalert2'

const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(CarritoContext)

    const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    
    const item= {id, nombre, precio}
    agregarAlCarrito(item,cantidad)

    Swal.fire({
            icon: 'success',
            title: '¡Producto Agregado!',
            html: `La cantidad de: ${cantidad} ${nombre} han sido agregado correctamente al carrito!`,
            showConfirmButton: true,
            confirmButtonText: 'Continuar',
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            color: '#fff',
            confirmButtonColor: '#dc3545',
            iconColor: '#28a745',
            customClass: {
                popup: 'swal-custom-popup',
                title: 'swal-custom-title',
                confirmButton: 'swal-custom-button'
            }
        })
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
            
            <p className="mensaje-producto">{descripcion}</p>
            
            <div className="contador-centrado">
            {
                agregarCantidad > 0 ?(<Link to="/cart" className="btn-terminar-compra">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail