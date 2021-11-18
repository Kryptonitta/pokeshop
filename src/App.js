import React from "react";
//Componentes
import NavBar from "./components/navBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
//Rutas
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Css general
import "./App.css";
// import Test from "./TEST/test";



function App() {
	return (
		<BrowserRouter className='app'>
			
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer propGreetings="Armá tu mejor equipo"/>} exact/>

				<Route path="/categoria/:categoriaId" element={<ItemListContainer propGreetings="Armá tu mejor equipo"/>} exact/>

				<Route path="/item/:itemid" element={<ItemDetailContainer/>} exact/>

			</Routes>

		</BrowserRouter>
	);
}

// Acá paso el prop --> se pasan siempre desde el componente padre. Acá están de manera "provisoria" el prop greetings + el itemCount 

export default App;