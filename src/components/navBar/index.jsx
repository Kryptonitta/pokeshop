import React from "react";
//Estilo
import "./style.css";
//Logo
import logo from "./logo.svg"
//Componentes
import CartWidget from "../cartWidget";

const NavBar = () => {
	return (
		<>
			<nav className="NavBar">
				<div className='NavBar__logoWidget'>
					<img src={logo} className='NavBar__logoWidget--logo' alt="logo"/>
					{/* <p className='NavBar__logoWidget--nombre'>pokeshop</p> */}
				</div>
					
					
				<ul className='NavBar__categorias'>
					<li className='NavBar__categorias--items'>
						TIERRA
					</li>

					<li className='NavBar__categorias--items'>
						AGUA
					</li>

					<li className='NavBar__categorias--items'>
						FUEGO
					</li>

					<li className='NavBar__categorias--items'>
						AIRE
					</li>
				</ul>
				

				<div className='NavBar__cartWidget'>
					<CartWidget className='NavBar__cartWidget--icon'/>
					<p className='NavBar__cartWidget--counter'>0</p>
				</div>

			</nav>
		</>
	);
};

export default NavBar;