import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="mi-navbar">
            <div className="mi-navbar-container">
                <Link to="/">
                    <img className="logogiostore" src="../public/img/logogiostore.jpg" alt="Logo Gio Store" />
                </Link>
                
                <ul className="mi-navbar-nav">
                    <li className="mi-nav-item">
                        <Link to="/categoria/futbol">FUTBOL</Link>
                    </li>
                    <li className="mi-nav-item">
                        <Link to="/categoria/patin">PATIN</Link>
                    </li>
                    <li className="mi-nav-item">
                        <Link to="/categoria/accesorios">ACCESORIOS</Link>
                    </li>
                </ul>
                
                <div className="mi-navbar-cart">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar