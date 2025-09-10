import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/128/15598/15598573.png"
    
    return(
        <div className="cart-widget">
            <img className="imgCarrito" src={imgCarrito} alt="Imagen Carrito" />
            <span className="cart-text">Carrito</span>
        </div>
    )
}

export default CartWidget