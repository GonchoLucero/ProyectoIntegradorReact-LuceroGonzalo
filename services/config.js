import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "finalcoderhouse-giostore.firebaseapp.com",
  projectId: "finalcoderhouse-giostore",
  storageBucket: "finalcoderhouse-giostore.firebasestorage.app",
  messagingSenderId: "267778018613",
  appId: "1:267778018613:web:b4b15985f0761aa985107c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

/*const misProductos = [
    {id:"1", nombre:"Botinero", precio: "10.000", img:"../public/img/botinero.jpg", idCat:"futbol", stock:7},
    {id:"2", nombre:"Chomba", precio: "30.000", img:"../public/img/chomba.jpg", idCat: "accesorios", stock:15},
    {id:"3", nombre:"Gorra", precio: "8.000", img:"../public/img/gorra.jpg", idCat: "futbol", stock:3},
    {id:"4", nombre:"Bolso Matero", precio: "18.500", img:"../public/img/bolsoMatero.jpg", idCat: "accesorios", stock:18},
    {id:"5", nombre:"Medias", precio: "7.000", img:"../public/img/medias.jpg", idCat: "futbol", stock:13},
    {id:"6", nombre:"Ruedas", precio: "102.000", img:"../public/img/ruedas.jpg", idCat: "patin", stock:4},
    {id:"7", nombre:"Frenos", precio: "57.000", img:"../public/img/frenos.jpg", idCat: "patin", stock:6},
    {id:"8", nombre:"Rodilleras", precio: "6.500", img:"../public/img/rodilleras.jpg", idCat: "patin", stock:24}
]

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async () => {
    const batch = writeBatch(db);
    const productosRef = collection(db, "productos");

    misProductos.forEach((producto) =>{
        const nuevoDoc = doc(productosRef);
        batch.set(nuevoDoc, producto);
    });

    try{
        await batch.commit();
        console.log("Productos subidos exitosamente");
    } catch(error){
        console.error("Error subiendo productos:", error);
    }
    };

subirProductos()*/