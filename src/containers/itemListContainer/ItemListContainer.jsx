//React
import React from "react";
import ItemCount from "../../components/itemCount";
//Style
import "./style.css";
//Componentes

const ItemListContainer=({propGreetings})=>{

    return(
        <div className="ItemListContainer__greeting">
            <h1>{propGreetings}</h1>
            <ItemCount stock="5" initial="1"/>     
        </div>
    )
}

ItemListContainer.defaultProps = {
    propGreetings: "Armá tu mejor equipo",

}

export default ItemListContainer;