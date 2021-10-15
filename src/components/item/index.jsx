import React from "react";
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
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                <ItemCount stock={product.stock} id={product.id} initial="1"/> 
                {/* <button onClick={()=>buyProduct(product)}>comprame</button> */}
            </div> 
		</div>
	);
};

export default Item;