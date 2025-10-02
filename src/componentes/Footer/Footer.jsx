import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="mi-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Gio Store</h3>
                    <p>Tu tienda deportiva de confianza</p>
                </div>
                
                <div className="footer-section">
                    <h3>Categorías</h3>
                    <Link to="/categoria/futbol">Futbol</Link>
                    <Link to="/categoria/patin">Patin</Link>
                    <Link to="/categoria/accesorios">Accesorios</Link>
                </div>
                
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Email: info@giostore.com</p>
                    <p>Tel: +54 11 1234-5678</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>2025 Gio Store. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer