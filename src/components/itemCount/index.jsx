//State
import React, {useState} from "react";
//Estilo
import "./style.css";

//OPCIÓN 01

// const ItemCount = (props) =>{

//     const [valor,setValor] = useState(props.initial);

//     //Función agregar stock
//     function onAdd(){
//         if (valor < props.stock){
//             setValor(parseInt(valor)+1)
//         }else{
//             alert("No hay stock disponible")
//         }
//     }

//     //Función quitar stock
//     function onSubstract(){
//         if (valor >= 1){
//             setValor(parseInt(valor)-1)
//         }

//     }

//     return(
//         <div className="acumulador">
//             <button className="acumulador__btn" onClick={onSubstract}>-</button>
//             <input className="acumulador__input" type="text" value={valor} />
//             <button className="acumulador__btn" onClick={onAdd}>+</button> 
//         </div>
//     )
// }

//OPCIÓN 02

const ItemCount = ({stock,initial,onAdd}) =>{
    let [contador,setContador] = useState (initial)

    //función sumar
    const sumar = () =>{
        if(contador<stock){
            setContador(contador +1 )
        }
    }

    //función restar
    const restar = () =>{
        if (contador>=1){
            setContador(contador -1)
        }
    }

    //función agregar 
    const agregar = () =>{
        if(stock > 0) {
            onAdd(contador)
        }
    }

    return(
        <div>
            <p>Seleccionaste {contador} item</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button disabled={contador>0 ? false:true} onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount; //Lo importé provisoriamente en ItemListContainer