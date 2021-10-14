import React from "react";
//Estilo
import "./style.css";

const ItemListContainer = (props) => {

    console.log(props.nombre)  //js vainilla

    const {saludo: sal , nombre:nom} = props //aplico desestructuración

    return(
        <section className="ItemListContainer__greeting">
            <p>{props.saludo},soy {/*sin desestructuración*/} {nom}.</p> {/*con desestructuración*/}
        </section>
    )

}

export default ItemListContainer;