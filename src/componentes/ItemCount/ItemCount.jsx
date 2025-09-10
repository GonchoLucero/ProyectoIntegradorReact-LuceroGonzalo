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

    console.log(contador)

  return (
    <>
     <div className="item-count-container">
        <div className="count-controls">
            <button className="boton-incrementar" onClick={incrementar}> + </button>
            <p className="count-display"> {contador} </p>
            <button className="boton-decrementar" onClick={decrementar}> - </button>
        </div>
        <button className="boton-agregar-carrito" onClick={()=> funcionAgregar(contador)}>Agregar al carrito</button>
    </div>
    </>
    )
}

export default ItemCount