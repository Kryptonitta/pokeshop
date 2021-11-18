
import { useEffect, useState } from "react";
import jsonDeProductos from "../../products.json";
import ItemDetail from "../../components/itemDetail";
import { useParams } from "react-router";


const ItemDetailContainer = () => {

    //OPCIÓN TRAER EL PRODUCTO POR ID
    const [itemDetail, setItemDetail] = useState([]);
    //Para filtrar por categoría
    const {itemId} = useParams();

    //Acá me traigo el producto segun id mediante una promesa

    const getItemDetailById = (data) => 
        new Promise((resolve, reject) => {
            setTimeout(
                () => {
                if (data) {
                    resolve(data);
                } else {
                    reject("No se encontro nada. Soy el IDC");
                }
            }, 1000);
            console.log(data) //Para ver que productos me trae
        });

        //Luego hago un useEffect para que se ejecute una vez cargado el componente
    useEffect(
        () => {
        getItemDetailById(jsonDeProductos)
        .then((result) => {
            setItemDetail(
                result.find((details) => details.id === itemId)
                )
        })
        .catch((err) => {
            console.log(err)
        });
    },[itemId]);
    

    //Armo el return con el condicional ternario
    return (
        <div className="itemDetailContainer">
        {itemDetail ? <ItemDetail details={itemDetail} /> : "cargando..."}
        </div>
    )
}   


export default ItemDetailContainer