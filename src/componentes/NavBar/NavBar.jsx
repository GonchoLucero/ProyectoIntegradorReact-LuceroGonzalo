import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return(
       <header>
        <h1>Tienda GIOSTORE</h1>
        <nav>
            <ul>
                <li>Futbol</li>
                <li>Patin</li>
                <li>Accesorios</li>
            </ul>
        </nav>

        <CartWidget/>
       </header>
    )
}
export default NavBar