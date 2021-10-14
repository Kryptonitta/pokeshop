/_ ----- CREACIÓN DE UNA APP REACT ----- _/

1. Se puede crear desde cmd o desde la terminal de vsccd
2. Se tiene que estar dentro de la carpeta donde se quiere crear el proyecto
3. escribir ---> npx create-react-app "nombre de la app"
4. Esperar a que termine de crearse. Esto es cuando dice "happy hacking"
5. Abrir la carpeta creada en VSC o la terminal.
6. Dentro de la carpeta del proyecto (nuevamente puede ser en cmd o el la terminar de vsc) escribir --> npm start
7. Esperar que se abra una web en el explorador: tiene el logo de react girando en el medio ). La app de react estará inicializada. Felicitaciones!

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

<<< REACT >>>

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

<<< CREANDO MIS COMPONENTES >>>

1. Creo un archivo suelto en src llamado --> App.js (este va a ser mi componente padre)
2. Importo en ese archivo tanto React como ReactDOM

<<< AGREGANDO FONT AWESOME >>>

    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome

<<< PROPS >>>

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
