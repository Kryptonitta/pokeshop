import React from "react";
// import ReactDOM from "react-dom";

//Componentes
import NavBar from "./components/navBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
//Css general
import "./index.css";

// import {Test01} from "./components/utils"; //si el archivo NO se llama index, tengo que especificarlo acá


function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<NavBar />
				<ItemListContainer saludo="Hola" nombre="Kari"/>
			</header>
		</div>
	);
}

export default App;