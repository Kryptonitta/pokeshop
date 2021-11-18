//ITEM DETAIL e ITEM son COMPONENTES PRESENTACIONALES. Solo reciben info y la muestran

import React from "react";
//Rutas
import { Link } from "react-router-dom";
//Estilo
import "./style.css"; 
//Componentes
import ItemCount from "../itemCount";

const Item = ({product}) =>{
    console.log (product.id)
	return (
		<div className="Item">
            <div>
                <img src={product.pictureURL} alt="imagen producto"/>
            </div>
            <div className="Item__info">
                <h1 className="Item__info--title">{product.title}</h1>
                <p className="Item__info--stock">Stock disponible: {product.stock}</p>
                <p className="Item__info--price">Precio unitario: ${product.price}</p>
                <Link to={`/item/${product.id}`} className="Item__info--link">Ver más</Link>
                <ItemCount stock={product.stock} initial={0} onAdd={(cantidad) => {console.log(cantidad)}}/>
            </div> 
		</div>
	);
};

export default Item;
//Este componente se llama en ItemDetailContainer.jsx