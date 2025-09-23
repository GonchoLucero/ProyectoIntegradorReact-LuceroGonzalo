import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <div className="item-count-container">
            <div className="item-count-selector">
                <h3 className="item-title">Selecciona cantidad:</h3>
                
                <div className="item-count">
                    <button 
                        className={`btn-counter btn-decrease ${contador <= inicial ? 'disabled' : ''}`}
                        onClick={decrementar}
                        disabled={contador <= inicial}
                    >
                        <span className="btn-icon">−</span>
                    </button>
                    
                    <div className="container">
                        <span className="container-number">{contador}</span>
                        <span className="container-label">
                            {contador === 1 ? 'unidad' : 'unidades'}
                        </span>
                    </div>
                    
                    <button 
                        className={`btn-counter btn-increase ${contador >= stock ? 'disabled' : ''}`}
                        onClick={incrementar}
                        disabled={contador >= stock}
                    >
                        <span className="btn-icon">+</span>
                    </button>
                </div>
            </div>

            <button 
                className="btn-cart" 
                onClick={() => funcionAgregar(contador)}
            >
                <span className="cart-icon">🛒</span>
                <span className="btn-text">Agregar al Carrito</span>
                <span className="btn-contador">({contador})</span>
            </button>

            <div className="progress-bar">
                <div className="progress-label">Cantidad seleccionada:</div>
                <div className="progress-track">
                    <div 
                        className="progress-fill" 
                        style={{width: `${(contador / stock) * 100}%`}}
                    ></div>
                </div>
                <div className="progress-text">{contador} de {stock}</div>
            </div>
        </div>
    )
}

export default ItemCount