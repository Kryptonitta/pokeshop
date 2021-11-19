import React from 'react';
//Style
import "./style.css"; 
//Component
import Item from "../../components/item";

const ItemList=({items})=>{
    //Cuando referencio a items[0] me devuelve un objeto (el primer objeto que me trae). Dentro busco a category así me consolea la cantidad de objetos encontrados
    console.warn("Productos filtrados en la categoría "+ items[0].category.toUpperCase()+": "+items.length+ " desde itemList.");

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