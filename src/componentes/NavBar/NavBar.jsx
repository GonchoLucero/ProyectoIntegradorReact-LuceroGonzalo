import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <img className="logogiostore" src={"../../../public/img/logogiostore.jpg"} alt="Logo Gio Store" />
                </Link>
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/categoria/futbol"> FUTBOL </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/patin"> PATIN</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categoria/accesorios"> ACCESORIOS</Link>
                    </li>
                </ul>
                
                <div className="navbar-cart">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar