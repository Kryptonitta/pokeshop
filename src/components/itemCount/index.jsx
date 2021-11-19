//State
import React, {useState} from "react";
//Estilo
import "./style.css";

const ItemCount = ({stock,initial}) =>{
    // En este caso estoy utilizando el hook useState
    const [contador,setContador] = useState (initial)
    const [inStock,setInStock] = useState(stock)

    //Creo el botón con dos estados iniciales: uno es deshabilitado y otro es habilitado. Si el stock es 0, el botón estará deshabilitado y dice "No hay stock". Si el stock es mayor a 0, el botón estará habilitado y dice "Agregar al carrito".

    let disabled = stock === 0 ? true : false;
    let text = stock === 0 ? "No hay stock" : "Agregar al carrito";

    //Creo los estados del botón
    let [button,setButton] = useState({
        disabled: disabled,
        text: text
    })
    
    //Configuro el cambio de estado del botón: si el stock es mayor a 0, al hacerle click el texto cambia a "Producto agregado"

    const onAdd = () =>{
        if(stock > 0){
            setButton({
                disabled: true,
                text: "Producto agregado"
            })
            
        }
    }

    //función sumar
    const sumar = () =>{
        if(stock > 0){
            setContador(contador +1 )
            setInStock(inStock -1)
        } else {
            setInStock (0)
            //En este caso, no es lo mismo contador++. Esto se debe a que originalmente contador++ no solo es incremento sino que también es asignación. En este caso, se debe asignar un nuevo valor a contador ya que sino estaria modificando el valor original.
        }
    }

    //función restar
    const restar = () =>{
        if (contador === 0){
            setContador(0)
        } else {
            setContador(contador -1)
            setInStock(inStock +1)
            // console.log("estoy por dentro"+contador) //Esto va a pasar ANTES que setContador, porque es una función asincrona.
        }
    }

    // console.log("Estoy por fuera"+contador) //Esto es para ver que se está modificando el valor de contador. Tener en cuenta que las funciones de estado son asincronicas. Si pusiera el console.log luego del set contador, me daría un valor anterior, porque primero me va a resolver el concole.log y luego el setContador. Por eso el mismo debe estar por fuera del mismo.

    return(
        <div className="container">
            {/*contador>0 ? false:true --> significado de la condición: si contador es mayor a 0 entonces retorna false, si no es mayor a 0 entonces retorna true .*/}
            <div className="contador"> 
                <button disabled={contador!==0 ? false:true} onClick={restar}  className="contador--acumulador">-</button>
                <button className="contador--acumulador">{contador}</button>
                <button disabled={contador!==stock ? false:true} onClick={sumar} className="contador--acumulador">+</button>
            </div>
            
            <div className="itemCount">
                <button disabled={button.disabled} onClick={onAdd} className="acumulador--btn">{button.text}</button>
                <p>{contador}</p>
            </div>
        </div>
    )
}

export default ItemCount; //Lo importé provisoriamente en ItemListContainer