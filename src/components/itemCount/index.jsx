//State
import React, {useState} from "react";
//Estilo
import "./style.css";


const ItemCount = (props) =>{

    const [valor,setValor] = useState(props.initial);

    //Función agregar stock
    function onAdd(){
        if (valor < props.stock){
            setValor(parseInt(valor)+1)
        }else{
            alert("No hay stock disponible")
        }
    }

    //Función quitar stock
    function onSubstract(){
        if (valor >= 1){
            setValor(parseInt(valor)-1)
        }

    }

    return(
        <div className="acumulador">
            <button className="acumulador__btn" onClick={onSubstract}>-</button>
            <input className="acumulador__input" type="text" value={valor} />
            <button className="acumulador__btn" onClick={onAdd}>+</button> 
        </div>
    )
}

export default ItemCount;