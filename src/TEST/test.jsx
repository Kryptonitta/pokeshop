import {useState,useEffect} from 'react'
//Style
import "./style.css";

//useState:
//useEffect: 

const Test = () => {


    // useState() --> este HOOK siempre se va a escribir con los paréntesis. Puede o no tener parámetros dentro

    // const resultado = useState(0)
    // console.log(resultado) //devuelve [0,f] --> la primer posición es el valor del estado y la segunda una función 

    // const contador = resultado[0]
    // const setContador = resultado[1]

    //Por convención, el hook de useState se nombre [algo,setAlgo]

    const [contador, setContador] = useState(0) //Acá le estoy diciendo que arranque en 0. Y aplico destructuración (es lo mismo de arriba pero más corto) 

    const cambiarContador = () => {
        //console.log(contador++)
        setContador(contador+1) //en React el ++ no funciona como en JS, por lo que hay que usar el +1
    }

    useEffect(() => {
        // Actualiza el title de la página en cada click!
        document.title = `Has hecho clic ${contador} veces`
      })

    return (
        <div className="test">
            <div>
                <h1>Soy un componente de prueba </h1>
            </div>
            
            <div>
                <p> El contador va: {contador}</p>
                <button onClick= {cambiarContador}>Contador</button>
            </div>

            
        </div>
    )
}

export default Test
