//React
import React from "react";
import ItemCount from "../../components/itemCount";
//Style
import "./style.css";
//Componentes

const ItemListContainer=({propGreetings})=>{

    return(
        <div className="ItemListContainer__greeting">
            <h1 className="ItemListContainer__greeting--h1">{propGreetings}</h1>
            {/* OPCIÓN 01 */}
            {/* <ItemCount stock="5" initial="1"/>      */}
            {/* OPCIÓN 02 */}
            <ItemCount stock={10} initial={0} onAdd={(cantidad) => {console.log(cantidad)}}/>
        </div>
    )
}

export default ItemListContainer;

