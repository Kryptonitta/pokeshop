import React from "react";
// import ReactDOM from "react-dom";
//Componentes
import NavBar from "./components/navBar";
import "./index.css"; //importo el css general del proyecto

// import {Test01} from "./components/utils"; //si el archivo NO se llama index, tengo que especificarlo acá


function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<NavBar />
			</header>
		</div>
	);
}

export default App;