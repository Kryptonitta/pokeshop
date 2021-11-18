**----- CREACIÓN DE UNA APP REACT -----**

1. Se puede crear desde cmd o desde la terminal de vsccd
2. Se tiene que estar dentro de la carpeta donde se quiere crear el proyecto
3. escribir ---> npx create-react-app "nombre de la app"
4. Esperar a que termine de crearse. Esto es cuando dice "happy hacking"
5. Abrir la carpeta creada en VSC o la terminal.
6. Dentro de la carpeta del proyecto (nuevamente puede ser en cmd o el la terminar de vsc) escribir --> npm start
7. Esperar que se abra una web en el explorador: tiene el logo de react girando en el medio ). La app de react estará inicializada. Felicitaciones!

<<< EXTENSIÓN PARA ESCRIBIR COMPONENTES MÁS RÁPIDO >>>

https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets

**----- ELEMENTOS IMPORTANTES PARA CORRER UNA APP EN REACT -----**

1. Importar React en scope --> import React from "react";
2. Importar ReactDOM en scope --> import ReactDOM from "react-dom"
3. Tener un elemento de React --> const a = <p> Hola Mundo </p>
4. Tener una función render corriendo --> ReactDOM.render(a,document.getElementById("root"))

**----- DIRECTORIOS -----**

<<< ARCHIVOS SUELTOS >>>

1. .gitignore --> tiene los archivos que no se van a subir a git

2. package.json --> usualmente no vamos a tocar eso manualmente. Acá va a aparecer, entre otras cosas, la versión de react, las dependencias que utiliza, los scripts, etc.

3. readme.md --> es el archivo que va a funcionar como readme cuando lo suba a github. Se puede modificar manualmente

4. yarn.lock --> no se toca. Puede que no esté

**----- REACT -----**

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

**----- CREANDO MIS COMPONENTES -----**

1. Creo un archivo suelto en src llamado --> App.js (este va a ser mi componente padre)
2. Importo en ese archivo tanto React como ReactDOM

- El código que se escribe por fuera del "return" es js vainlla. Ahí puedo poner console.log para ver si las cosas están funcionando bien

**----- COMO IMPORTAR COMPONENTES -----**

- En general los archivos se exportan con --> export default Componente. En ese caso, los importo SIN LLAVES --> import Componente from "./Componente"

- En el caso de que tenga más de un export en un mismo archivo, importo CON LLAVES --> import {Componente} from "./Componente"

**----- AGREGANDO FONT AWESOME -----**

    npm i --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/react-fontawesome

**----- PROPS -----**

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

**----- ESTADOS + CICLOS DE VIDA -----**

En js vainilla, cuando teniamos que modificar algo, lo que haciamos era llamar al elemento con getElementById y modificarlo por ejemplo)
En React, esto se hace con estados.

> > > IMPORTANTE: los componentes se redibujan en dos ocasiones:

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

**----- HOOKS -----**

offtopic --> es lo mismo decir: un componente se ejecutó, se renderizó, se montó.

Los hooks se usan para crear funciones que se ejecutan en el momento en que se llaman. En lugar de usar una función, se usa una función que se ejecuta en el momento en que se llama.

Los estados son ASÍNCRONOS. Esto significa que se van a ejecutar al final de la ejecución del código. Por eso, si pongo un console.log dentro de un estado, va a imprimir antes de que se ejecute el estado.

Un estado es una variable que se modifica en el tiempo.

- Son funciones que se importan de React
- Por defecto React ya trae hooks, pero también se pueden bajar otras librerías para obtener nuevos
- Las librerías se descargan desde npm
- Por convención empiezan con "use..."
- Los hooks NO PUEDEN ESTAR DENTRO DE BUCLES NI CONDICIONALES: esto es por un tema de closures (investigar más...).

> > > Hooks básicos
> > > _ useState
> > > _ useEffect
> > > \_ useContext

> > > Hooks adicionales
> > > _ useReducer
> > > _ useCallback
> > > _ useMemo
> > > _ useRef
> > > _ useImperativeHandle
> > > _ useLayoutEffect
> > > \_ useDebugValue

Más info --> https://es.reactjs.org/docs/hooks-reference.html

**----- COMO IMPORTAR LOS HOOKS -----**

import {nombreDelHook} from "react"; (Recordar: los import DEFAULT van SIN llave, mientras que EL RESTO VA CON LLAVE)

### USE STATE

- useState() es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la función para modificarla.

> > De manera "larga" podemos decir que es una función que devuelve un array con dos elementos:

-- const resultado = useState(valorInicial);
-- const estado = resultado[0];
-- const cambiarEstado = resultado[1];

> > Como realmente se escribe (basicamente es desestructuración):

-- const [estado, cambiarEstado] = useState(0);
-- const [state, setState] = useState(0);

**Ejemplo 01 USE STATE**

´´´
let [contador,setContador] = useState (0) //puedes ser valor manual o una prop

    const sumar = () =>{
        if(contador<stock){
            setContador(contador +1 )       //Le paso acá la función que modifica el estado --> setContador
        }
    }

´´´

**Ejemplo 02 USE STATE** ¡¡ ver bien el código !!
Cambiar valor me va a ir cargando cada caracter que se ingrese, mientras que cambiarUsuarios lo va a agregar a un array vacío
´´´
const [usuarios,setUsuarios] = useState ([])
const [valor,setValor] = useState ("")

    const cambiarValor = (e) =>{
      setValor(e.target.value)
    }

    const cambiarUsuarios = (e) =>{
      setUsuarios(usuarios)
    }

return(

  <div>
      <input type="text" value={valor} onChange={cambiarValor}/>
      <button onClick={cambiarUsuarios}>Agregame</button>
  </div>
)

´´´

(Por convención, el primer y segundo parámetro se llaman igual con la diferencia de que al segundo le ponemos un "set" al principio)

### USE EFFECT

- Es un hook que recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por un cambio de estado, por recibir props nuevas o, y esto es importante, porque es la primera vez que se monta.

- Este hook normalmente es usado para la inicialización de variables, llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM.
- También es posible especificar cuándo se debe ejecutar esta función con un segundo argumento opcional que le podemos pasar.

- Al no retornar nada, no se coloca en una variable.
- Primero se renderiza TODO el componente. No importa en que linea de código esté el use effect. Una vez que se renderizó, ahí lo viene a buscar. Es por esto que es una función que se ejecuta LUEGO de renderizado el componente.

  useEffect(() => {
  //Código que se ejecuta cuando el componente se renderiza por primera vez
  }, []);

**Ejemplo 01 useEffect: limitando la cantidad de veces con un valor**

´´´
useEffect (() =>{
document.title = "Has hecho click ${count} veces"
},[count])

´´´

**Ejemplo 02 useEffect: dejando vacío el segundo parámetro para que solo se ejecute una vez**

´´´
useEffect (() =>{
document.title = "Has hecho click"
},[]
´´´

**Ejemplo 03 useEffect + useState**

1. Primero le dio que va a buscar el pokemon de nombre pikachu
2. Le seteo un estado con el nombre del pokemon y el cambio de estado
3. Con un useEffect le pido que busque el pokemon de nombre pikachu en la API
4. Dentro del useEffect le pido que cambie el estado con el nombre del pokemon
5. Retorno la pokemonInfo y tanto su id como su nombre

function PokemonInfo({ name = "pikachu" }) {
const [pokemonInfo, setPokemonInfo] = useState(null);

-- useEffect(
---- () => {
------fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
-------- .then(res => res.json())
-------- .then(pokemon => {
---------- console.log(pokemon);
---------- setPokemonInfo(pokemon);
----------});
---- },
---- [name]
-- );

-- return (
---- pokemonInfo && (
------ <span>
-------- La pokeId es #{pokemonInfo.id} y su nombre es {pokemonInfo.name}
------ </span>
---- )
-- );
}

### useContext

### useReducer

### useCallback

### useMemo

### useRef

**----- CONSUMIENDO APIS -----**

### REQUEST

- URL/IP --> Dirección física de la máquina a la que haremos el request.
- VERBO --> GET, POST, PUT, DELETE, etc.
- VERSION --> versión que estamos usando

### RESPONSE

- STATUS --> 200, 201, 302, 304, 404, 500, etc.

### API REST: pasos!

fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
----.then((respuesta) => {
------ console.log("Cambié de estado a fullfilled")
------ console.log("conseguí un valor intermedio")
------ const valorParseado = respuesta.json() //me lo va a transformar en un objeto
------ return valorParseado
---- })
----.then((respuesta) => {
------ console.log(respuesta) //acá traigo el objeto
---- })
----.catch((error) => {
------ console.log("Cambié de estado a rejected")
------ console.log(error)
----})

- API: es un "traductor" que me permite usar un lenguaje diferente
- API REST:
- REST: es una estructura de datos que permite crear una API

**----- RUTAS Y NAVEGACIÓN -----**
SPA: single page aplication
un spa es una aplicación que se carga en una sola página. Esto reduce el tiempo de carga y optimiza el uso de memoria.

En React esto se logra con el Router. El Router es un componente que se encarga de manejar las rutas. Se instala con--> npm i react-router-dom

Route es el más usado. También tenemos link y navLink. La diferencia entre link y navLinks es que el primero es un enlace normal, mientras que el segundo es un enlace que se puede usar en un menú: nos genera un estado active segun donde estemos. Esto luego lo podemos usar en css para darle un estilo diferente.

Para poder usar rutas, tenemos que colocar BrowserRouter en el componente principal o en el padre de todos los componentes que queramos que sean rutas.
En este caso, lo vamos a poner en app.js que es el componente padre.

También tenemos que utilizar el componente Router para poder usar las rutas. Quedaría así:

<BrowserRouter>		
  <NavBar /> //Acá pasamos un componente sin link 
	<Routes>
		<Route path="/" element={<ItemListContainer propGreetings="Armá tu mejor equipo"/>} exact/> //Acá le ponemos el exact para que solo se muestre cuando la ruta es estrictamente igual a /
    <Route path="/item/:id" element={<ItemDetailContainer/>} /> //Los componentes van con las </> dentro de llaves.
	</Routes>
</BrowserRouter>

#### UseParams

UseParams es una función que nos permite obtener los parámetros de la ruta. Para ello, tenemos que pasarle una función que nos devuelva un objeto con los parámetros. Esto lo podemos hacer con una arrow function:
