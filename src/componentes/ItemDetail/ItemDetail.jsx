import "./ItemDetail.css"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"

const ItemDetail = ({id, nombre, precio, img, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarAlCarrito} = useContext(CarritoContext)

    // MENSAJES PERSONALIZADOS PARA LOS PRODUCTOS
    const mensajesProductos = {
        "Botinero": "Mantén tus botines organizados y protegidos con este elegante botinero de alta calidad. Diseñado especialmente para jugadores que valoran el orden y el cuidado de su equipamiento. Su construcción robusta garantiza durabilidad y su diseño compacto se adapta perfectamente a cualquier espacio. ¡El accesorio esencial para todo futbolista que busca profesionalismo en cada detalle!",
        
        "Rodilleras": "Protección superior y comodidad excepcional en cada movimiento. Estas rodilleras están diseñadas con materiales de primera calidad que brindan el soporte perfecto durante entrenamientos intensos y competencias. Su diseño anatómico se ajusta naturalmente a tu rodilla, permitiendo libertad de movimiento sin comprometer la protección. ¡Tu confianza en la cancha comienza con la protección adecuada!",
        
        "Medias": "Comodidad y rendimiento en cada paso. Fabricadas con tecnología de absorción de humedad y materiales transpirables, estas medias te mantendrán cómodo durante todo el partido. Su construcción reforzada en zonas de mayor desgaste garantiza durabilidad excepcional. El ajuste perfecto y la suavidad del material hacen que olvides que las llevas puestas. ¡La base de un gran rendimiento está en los detalles!",
        
        "Ruedas": "Velocidad, precisión y control en cada giro. Estas ruedas de alto rendimiento están fabricadas con compuestos especiales que ofrecen la combinación perfecta entre durabilidad y deslizamiento suave. Ideales para patinadores que buscan llevar su técnica al siguiente nivel. Su diseño aerodinámico y construcción balanceada garantizan estabilidad en cada maniobra. ¡Experimenta la diferencia de rodar con calidad profesional!",
        
        "Bolso Matero": "El compañero perfecto para tus aventuras materas. Este bolso está especialmente diseñado para mantener todos tus elementos de mate organizados y protegidos. Compartimentos internos pensados para termo, mate, bombilla y yerba, con materiales resistentes que protegen del calor y la humedad. Su diseño compacto y elegante lo hace ideal para llevarlo a cualquier lugar. ¡Porque compartir un mate es crear momentos únicos!",
        
        "Gorra": "Estilo y protección en un solo accesorio. Esta gorra combina diseño moderno con funcionalidad práctica, ofreciendo protección solar mientras complementa tu look casual. Fabricada con materiales de calidad que mantienen su forma y color lavado tras lavado. Su ajuste cómodo y versatilidad la convierten en el complemento perfecto para cualquier ocasión. ¡Un clásico que nunca pasa de moda y siempre suma personalidad!",
        
        "Frenos": "Seguridad y control en tus manos. Estos frenos de alta calidad están diseñados para ofrecer la respuesta precisa que necesitas en cada situación. Fabricados con materiales resistentes al desgaste y condiciones climáticas adversas. Su instalación sencilla y mantenimiento mínimo los convierten en la elección inteligente para ciclistas exigentes. ¡Porque tu seguridad no tiene precio y el control total está a tu alcance!",
        
        "Chomba": "Elegancia casual para el día a día. Esta chomba combina la comodidad de los tejidos suaves con un diseño atemporal que nunca pasa de moda. Su corte moderno y acabados de calidad la hacen perfecta tanto para ocasiones casuales como para looks más formales. Los materiales seleccionados garantizan durabilidad y confort en cada uso. ¡Un básico del guardarropa que aporta sofisticación y versatilidad a tu estilo!"
    }

    const mensajeProducto = mensajesProductos[nombre]

    const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    
    const item= {id, nombre, precio}
    agregarAlCarrito(item,cantidad)
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
            
            <p className="mensaje-producto">{mensajeProducto}</p>
            
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