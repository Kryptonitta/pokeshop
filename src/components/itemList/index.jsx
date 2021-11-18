import React from 'react';
//Style
import "./style.css"; 
//Component
import Item from "../../components/item";

const ItemList=({items})=>{

// Acá lo que hago es mapear los productos para que por cada uno me genere una card
    return(
        <div className="ItemList">
            {items.length 
            ? items.map((items) => <Item key={items.id} item={items}/>)
            : "Cargando productos..."} 
        </div>
    )
}

export default ItemList;