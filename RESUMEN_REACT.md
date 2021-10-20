/_ ----- CREACIÓN DE UNA APP REACT ----- _/

1. Se puede crear desde cmd o desde la terminal de vsccd
2. Se tiene que estar dentro de la carpeta donde se quiere crear el proyecto
3. escribir ---> npx create-react-app "nombre de la app"
4. Esperar a que termine de crearse. Esto es cuando dice "happy hacking"
5. Abrir la carpeta creada en VSC o la terminal.
6. Dentro de la carpeta del proyecto (nuevamente puede ser en cmd o el la terminar de vsc) escribir --> npm start
7. Esperar que se abra una web en el explorador: tiene el logo de react girando en el medio ). La app de react estará inicializada. Felicitaciones!

<<< EXTENSIÓN PARA ESCRIBIR COMPONENTES MÁS RÁPIDO >>>

https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets

/_ ----- ELEMENTOS IMPORTANTES PARA CORRER UNA APP EN REACT ----- _/

1. Importar React en scope --> import React from "react";
2. Importar ReactDOM en scope --> import ReactDOM from "react-dom"
3. Tener un elemento de React --> const a = <p> Hola Mundo </p>
4. Tener una función render corriendo --> ReactDOM.render(a,document.getElementById("root"))

/_ ----- DIRECTORIOS ----- _/

<<< ARCHIVOS SUELTOS >>>

1. .gitignore --> tiene los archivos que no se van a subir a git

2. package.json --> usualmente no vamos a tocar eso manualmente. Acá va a aparecer, entre otras cosas, la versión de react, las dependencias que utiliza, los scripts, etc.

3. readme.md --> es el archivo que va a funcionar como readme cuando lo suba a github. Se puede modificar manualmente

4. yarn.lock --> no se toca. Puede que no esté

/_ ----- REACT ----- _/

1. Todos los componentes de React son funciones
2. Todos los componentes de React tienen retorno
3. Todos los componentes inician con mayúsculas

   function Componente () {
   return ?
   }

   const Componente = () => {
   return ?
   }

   class componente {
   return ?
   };

/_ ----- CREANDO MIS COMPONENTES ----- _/

1. Creo un archivo suelto en src llamado --> App.js (este va a ser mi componente padre)
2. Importo en ese archivo tanto React como ReactDOM

- El código que se escribe por fuera del "return" es js vainlla. Ahí puedo poner console.log para ver si las cosas están funcionando bien

/_ ----- AGREGANDO FONT AWESOME ----- _/

    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome

/_ ----- PROPS ----- _/

- Se le llama props a lo que en js vainilla llamamos parámetros
- Por convención se los nombra como "props" --> (props)
- SIEMPRE que pase un prop (independientemente el tipo de dato) va a llegar como UN OBJETO (independientemente la cantidad de datos que tenga el prop). Se crea un objeto de objetos.
- IMPORTANTE: si lo que estoy compilando es JS vainilla, las props las paso así:

  console.log (props)
  console.log(props.nombre)

ESTO MISMO NO FUNCIONA ASÍ SI ES UN COMPONENTE DE REACT/JSX

- La sintaxis es la siguiente:

const PruebaDeProps = (props) => {

    console.log(props.nombre)  //js vainilla

    const {nombre: nom , apellido:ape} = props //aplico desestructuración

    return(
        <header id="main-header">
            <h1> Nombre: {props.nombre}</h1> //sin desestructurar
            <h2> Apellido: {ape}</h2> // con desestructuración
        </header>
    )

}

export default PruebaDeProps;

- Como buena práctica, el valor al prop se lo doy DESDE DONDE LO LLAMO (vendría a ser, desde el padre)
- SIEMPRE que pueda le voy a pasar los nuevos valores/modificaciones mediante props a un componente.
- El flujo de los props es de COMPONENTE PADRE A COMPONENTE HIJO

/_ ----- HOOKS ----- _/

- Son funciones que se importan de React
- Por defecto React ya trae hooks, pero también se pueden bajar otras librerías para obtener nuevos
- Las librerías se descargan desde npm
- Por convención empiezan con "use..."
- Los hooks NO PUEDEN ESTAR DENTRO DE BUCLES NI CONDICIONALES: esto es por un tema de closures (investigar más...).

Hooks básicos
_ useState
_ useEffect
\_ useContext

Hooks adicionales
_ useReducer
_ useCallback
_ useMemo
_ useRef
_ useImperativeHandle
_ useLayoutEffect
\_ useDebugValue

Más info --> https://es.reactjs.org/docs/hooks-reference.html

/_ ----- ESTADOS + CICLOS DE VIDA ----- _/

- IMPORTANTE: los componentes se redibujan en dos ocasiones:

  1. cuando les cambia el estado
  2. cuando reciben un nuevo valor de prop

- Los componentes de React pasan por tres fases: Mounting, Updating y Unmounting.
- FASE 01: Mounting --> significa que el componente está en proceso de insertar su contenido en el DOM.
- FASE 02: Updating --> se llama cuando el componente está siendo actualizado. La actualización de un componente se produce cuando hay un cambio en el estado del componente o de sus props.
- FASE 03: Unmounting --> es la última y es cuando un componente tiene que ser eliminado del DOM.

- useState y useEffect, se activan en la fase de Updating.

- La manera que tiene react de modificar cosas en "pantalla" es combinando los states con los ciclos de vida
- Ejemplo: quiero actualizar una constante llamada "contador". La misma la coloco dentro de un estado. Luego hago la función que hace que se modifique (puede ser con un onClick). Y luego, como es parte de un estado, se me va a actualizar cada vez que le haga el "click"
- Cada vez que se re-renderiza un cambio de estado, se modifica el componente y todo su ciclo de vida.

<<< COMO IMPORTAR LOS HOOKS >>>

import {nombreDelHook} from "react"; (Recordar: los import DEFAULT van SIN llave, mientras que EL RESTO VA CON LLAVE)

<<< useState >>>

- useState() es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la función para modificarla.
- Como el valor devuelto por la función es un array, podemos descomponerlo para acceder a sus elementos de manera individual.

  const [count, setCount] = useState(0);

<<< useEffect >>>

- Este hook normalmente es usado para la inicialización de variables, llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM.
- La llamada a useEffect acepta una función como argumento. Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice.
