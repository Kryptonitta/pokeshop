import React from 'react';
//Style
import "./style.css"; 
//Component
import Item from "../../components/item";

const ItemList=({products})=>{

    return(
        <div className="ItemList">
            {/*Acá lo que hago es mapear los productos para que por cada uno me genere una card*/}
            {products.map(product =>{
                return <Item key={product.id} product={product}/>
            }) 
            
        }
        </div>
    )
}

export default ItemList;