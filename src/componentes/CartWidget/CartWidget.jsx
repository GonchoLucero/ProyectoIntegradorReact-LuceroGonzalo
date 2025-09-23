import "./CartWidget.css"
import { useContext } from "react"
import {CarritoContext} from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/128/15598/15598573.png"

    const {cantidadTotal} = useContext(CarritoContext)
    
    return(
        <div className="cart-widget">
            <Link to= "/cart">
            <img className="imgCarrito" src={imgCarrito} alt="Imagen Carrito" />
            <span className="cart-text">Carrito</span>
            {
            cantidadTotal > 0 && <strong> {cantidadTotal}</strong>
            }
            </Link>
        </div>
    )
}

export default CartWidget