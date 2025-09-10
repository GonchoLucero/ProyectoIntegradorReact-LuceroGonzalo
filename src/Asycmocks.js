const misProductos = [
    {id:"1", nombre:"Botinero", precio: "10.000", img:"../public/img/botinero.jpg", idCat:"futbol", stock:7},
    {id:"2", nombre:"Chomba", precio: "30.000", img:"../public/img/chomba.jpg", idCat: "accesorios", stock:15},
    {id:"3", nombre:"Gorra", precio: "8.000", img:"../public/img/gorra.jpg", idCat: "futbol", stock:3},
    {id:"4", nombre:"Bolso Matero", precio: "18.500", img:"../public/img/bolsoMatero.jpg", idCat: "accesorios", stock:18},
    {id:"5", nombre:"Medias", precio: "7.000", img:"../public/img/medias.jpg", idCat: "futbol", stock:13},
    {id:"6", nombre:"Ruedas", precio: "102.000", img:"../public/img/ruedas.jpg", idCat: "patin", stock:4},
    {id:"7", nombre:"Frenos", precio: "57.000", img:"../public/img/frenos.jpg", idCat: "patin", stock:6},
    {id:"8", nombre:"Rodilleras", precio: "6.500", img:"../public/img/rodilleras.jpg", idCat: "patin", stock:24}
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },1000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item=> item.id === id)
            resolve(producto)
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item=> item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 1000)
    })
}