import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return (
            <>
                <div className="cart-container">
                <div className="cart">
                    <div className="icon">🛒</div>
                    <h2>Tu carrito esta vacío</h2>
                    <p>¡Descubre nuestros increibles productos!</p>
                    <Link to="/" className="link-productos">Explorar Productos</Link>
                </div>
            </div>
            </>
        )
    }


  return (
    <div className="cart-container">
            <h2 className="cart-title">Mi Carrito de Compras</h2>
            
            <div className="cart-items">
                {
                    carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
                }
            </div>

            <div className="cart-resumen">
                <h3>Total de productos:<span className="total-items">{cantidadTotal}</span></h3>
                <h3>Total a pagar:<span className="total-cantidad">${total.toLocaleString()}</span></h3>
                
                <div className="cart-actions">
                    <button className="btn-clear" onClick={() => vaciarCarrito()}>🗑️ Vaciar Carrito</button>
                    <Link to="/checkout" className="btn-checkout">🛍️ Finalizar Compra</Link>
                </div>
            </div>
        </div>
  )
}

export default Cart