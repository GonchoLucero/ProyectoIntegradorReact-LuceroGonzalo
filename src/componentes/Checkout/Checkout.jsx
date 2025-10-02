import React, { useContext } from 'react'
import { useState } from 'react'
import {CarritoContext} from "../../context/CarritoContext"
import {db} from "../../../services/config"
import { collection, addDoc } from 'firebase/firestore'
import "./Checkout.css"

const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completa todos los campos!")
            return
        }

        if(email !== emailConfirmacion){
            setError("Los campos de email no coinciden!")
            return
        }

        const orden = {
            items: carrito.map (producto =>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db,"ordenes"), orden)
            .then(docRef =>{
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch(error => {
                console.log("Error al crear la orden", error)
                setError("Se produjo un error al crear la orden!!")
            })
    }

    if(ordenId) {
        return (
            <div className="checkout-container">
                <div className="orden-exitosa">
                    <div className="check-icon">✅</div>
                    <h2>¡Compra Realizada con Éxito!</h2>
                    <p className="orden-numero">Tu número de orden es: <strong>{ordenId}</strong></p>
                    <p className="orden-mensaje">Gracias por tu compra. Recibirás un email de confirmación pronto.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2>Finalizar Compra</h2>
                <div className="resumen-compra">
                    <span className="total-productos">{cantidadTotal} productos</span>
                    <span className="total-precio">${total.toLocaleString()}</span>
                </div>
            </div>
            
            <form onSubmit={manejadorFormulario} className="checkout-form">
                <div className="form-section">
                    <h3>Información Personal</h3>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre"
                                value={nombre}
                                onChange={(e)=> setNombre(e.target.value)}
                                className="form-input"
                                placeholder="Ingresa tu nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido</label>
                            <input 
                                type="text" 
                                id="apellido"
                                value={apellido}
                                onChange={(e)=> setApellido(e.target.value)} 
                                className="form-input"
                                placeholder="Ingresa tu apellido"
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input 
                            type="text" 
                            id="telefono"
                            value={telefono}
                            onChange={(e)=> setTelefono(e.target.value)}
                            className="form-input"
                            placeholder="Ingresa tu teléfono"
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Información de Contacto</h3>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)} 
                            className="form-input"
                            placeholder="ejemplo@correo.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailConfirmacion">Confirmar Email</label>
                        <input 
                            type="email" 
                            id="emailConfirmacion"
                            value={emailConfirmacion}
                            onChange={(e)=> setEmailConfirmacion(e.target.value)} 
                            className="form-input"
                            placeholder="Confirma tu email"
                        />
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type='submit' className="btn-confirmar-compra">
                    🛒 Confirmar Compra
                </button>
            </form>
        </div>
    )
}

export default Checkout