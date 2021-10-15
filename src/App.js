import React from "react";
//Componentes
import NavBar from "./components/navBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
//Css general
import "./App.css";



function App() {
	return (
		<div className='app'>

			<header className='app__header'>
				<NavBar />
			</header>

			<section className='app__section'>
				<ItemListContainer/> {/* Acá están de manera "provisoria" el prop greetings + el itemCount */}
			</section>

		</div>
	);
}

export default App;