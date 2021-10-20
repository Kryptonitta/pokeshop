import React from "react";
//Componentes
import NavBar from "./components/navBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
//Css general
import "./App.css";
import Test from "./TEST/test";



function App() {
	return (
		<div className='app'>

			<header className='app__header'>
				<NavBar />
			</header>

			<section className='app__section'>
				<ItemListContainer propGreetings="Armá tu mejor equipo"/> {/* Acá paso el prop --> se pasan siempre desde el componente padre. Acá están de manera "provisoria" el prop greetings + el itemCount */}
			</section>

			<section>
				<Test/>
			</section>

		</div>
	);
}

export default App;