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
    // En este caso estoy utilizando el hook useState
    let [contador,setContador] = useState (initial)

    //función sumar
    const sumar = () =>{
        
        if(contador<stock){
            setContador(contador +1 )
            //En este caso, no es lo mismo contador++. Esto se debe a que originalmente contador++ no solo es incremento sino que también es asignación. En este caso, se debe asignar un nuevo valor a contador ya que sino estaria modificando el valor original.
        }
    }

    //función restar
    const restar = () =>{
        if (contador>=1){
            setContador(contador -1)
            console.log("estoy por dentro"+contador) //Esto va a pasar ANTES que setContador, porque es una función asincrona.
        }
    }

    console.log("Estoy por fuera"+contador) //Esto es para ver que se está modificando el valor de contador. Tener en cuenta que las funciones de estado son asincronicas. Si pusiera el console.log luego del set contador, me daría un valor anterior, porque primero me va a resolver el concole.log y luego el setContador. Por eso el mismo debe estar por fuera del mismo.

    //función agregar al carrito. 
    const agregar = () =>{
        if(stock > 0) {
            onAdd(contador)
        }
    }

    return(
        <div className="container">
            {/* <p>Vas a agregar {contador} pokemones al carrito</p> */}
            <div className="contador"> 
                <button disabled={contador!==0 ? false:true} onClick={restar}  className="contador--acumulador">-</button>
                <button disabled={contador!==stock ? false:true} onClick={sumar} className="contador--acumulador">+</button>
            </div>
            {/*contador>0 ? false:true --> significado de la condición: si contador es mayor a 0 entonces retorna false, si no es mayor a 0 entonces retorna true .*/}
            <button disabled={contador>0 ? false:true} onClick={agregar} className="acumulador--btn">Agregar {contador} productos al carrito</button>
        </div>
    )
}

export default ItemCount; //Lo importé provisoriamente en ItemListContainer