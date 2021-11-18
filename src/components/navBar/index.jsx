import React from "react";
//Rutas
import { Link } from "react-router-dom";
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
				<Link to="/" className='NavBar__logoWidget'>
					<img src={logo} className='NavBar__logoWidget--logo' alt="logo"/>
				</Link>
					
					
				<ul className='NavBar__categorias'>
					<Link to="/categoria/normal" className='NavBar__categorias--items'>
						NORMAL
					</Link>

					<Link to="/categoria/evolucion" className='NavBar__categorias--items'>
						EVOLUCION
					</Link>
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