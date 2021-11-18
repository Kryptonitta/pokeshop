//ITEM DETAIL e ITEM son COMPONENTES PRESENTACIONALES. Solo reciben info y la muestran

import React from "react";
//Rutas
import { Link } from "react-router-dom";
//Estilo
import "./style.css"; 
//Componentes
import ItemCount from "../itemCount";

const Item = ({product}) =>{
    // //Desestructuración del objeto
    // const product= {title,description,price,pictureURL};
	return (
		<div className="Item">
            <div>
                <img src={product.pictureURL} alt="imagen producto"/>
            </div>
            <div className="Item__info">
                <h1 className="Item__info--title">{product.title}</h1>
                <p className="Item__info--description">{product.description}</p>
                <p className="Item__info--stock">Stock disponible: {product.stock}</p>
                <p className="Item__info--price">Precio unitario: ${product.price}</p>
                <Link to="/item/producto.id" >Ver más</Link>
                <ItemCount stock={product.stock} initial={0} onAdd={(cantidad) => {console.log(cantidad)}}/>
            </div> 
		</div>
	);
};

export default Item;