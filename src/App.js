import React from "react";
// import ReactDOM from "react-dom";

//Componentes
import NavBar from "./components/navBar";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
//Css general
import "./index.css";

// import {Test01} from "./components/utils"; //si el archivo NO se llama index, tengo que especificarlo acá


function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<NavBar />
				<ItemListContainer saludo="Hola" nombre="el greeting"/>
				<ItemDetailContainer/>
			</header>
		</div>
	);
}

export default App;