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
			<div className="NavBar__logoWidget">
				<p className='NavBar__logoWidget--logo'>
					<img src={logo} alt='logo' />
					<p>pokeshop</p>
				</p>

				<div className='NavBar__logoWidget--cartwidget'>
					<CartWidget/>
					<p>0</p>
				</div>
			</div>
		</>
	);
};

export default NavBar;