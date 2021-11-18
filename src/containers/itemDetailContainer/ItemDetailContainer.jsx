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

    const getItemDetailById = (id) => 
        new Promise((resolve, reject) => {
            setTimeout(
                () => {
                if (id) {
                    resolve(jsonDeProductos.filter((item) => item.id === id));
                } else {
                    reject("No se encontro nada");
                }
            }, 1000);
            console.log(id) //Para ver que productos me trae
        });


        //Luego hago un useEffect para que se ejecute una vez cargado el componente
    useEffect(
        () => {
        getItemDetailById(itemId)
        .then((result) => {
            itemId
            ?  setItemDetail(
                result.find((item) => item.id === itemId)
            )
            : setItemDetail(jsonDeProductos)
        })
            .catch((err) => {
                console.log(err)
            });
    },[itemId]);
    

    //Armo el return con el condicional ternario
    return (
        itemDetail.length > 0
                ? <ItemDetail itemDetail={itemDetail} />
                : <div>Cargando...</div>
    )

}   


export default ItemDetailContainer