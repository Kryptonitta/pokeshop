import React from "react";
//Estilo
import "./style.css";

const ItemListContainer = (props) => {

    console.log(props.nombre)  //js vainilla

    const {saludo: sal , nombre:nom} = props //aplico desestructuración

    return(
        <section className="ItemListContainer__greeting">
            <p>{props.saludo},soy </p><br/>{/*sin destructuring*/}
            <p>{nom}.</p> {/*con destructuring*/}
        </section>
    )

}

export default ItemListContainer;