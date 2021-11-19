//Este container me va a servir para mostrar los productos en el index y mostrar por categoría

//React
import {useState,useEffect} from "react";
import ItemList from "../../components/itemList";
//Para filtrar
import { useParams } from "react-router";
//Style
import "./style.css";
//JSON
import jsonDeProductos from "../../products.json";

const ItemListContainer=({propGreetings})=>{

    //OPCIÓN TRAER TODOS LOS PRODUCTOS
    const [products,setProducts] = useState([])
    //Para filtrar por categoría
    const {categoriaId} = useParams();

    //Acá me traigo los productos
    const getData = (data) =>
    //Creo la promesa que me trae los datos. SOLO los trae, pero no se muestran. Esto lo vamos a hacer con el useEffect.
        new Promise((resolve, reject) => {
            //Con el setTimeOut simulo el delay de la llamada a la api
            setTimeout(
                () => {
                if (data) {
                    resolve(data);
                } else {
                    reject("No se encontro nada. Soy el item list container");
                }
            }, 1000);
            console.warn("Se encontraron "+data.length+" items desde ItemListContainer.") //Para ver cuantos productos me trae
        });

        

    //Vamos a usar un useEffect porque queremos que se ejecute una vez cargado el componente

    //MOSTRANDO TODOS LOS PRODUCTOS
    useEffect(
        () => {
        getData(jsonDeProductos) //es para traer el json
        .then((result) => {
            categoriaId    
            ?  setProducts(
                result.filter((producto) => producto.category === categoriaId) 
            )
            : setProducts(jsonDeProductos)
        })
            .catch((err) => {
                console.log(err)
            });
    },[categoriaId]);
    
    //Los corchetes son para que se ejecute SOLO una vez cuando el componente se monte. Si quiero que se ejecute cada vez que se monte, pongo dentro de los corchetes el parametro. En este caso, el parametro es categoriaId.

    //El return no me admite condicionales. Es por eso que la condición de que mostrar debe realizarse con un operador ternario.
    return( 
        products.length > 0 
        ? <div className="ItemListContainer__greeting">
            <h1 className="ItemListContainer__greeting--h1">{propGreetings}</h1>
            <ItemList items={products}/>
            </div> 
        : <>
            <div className="ItemListContainer__greeting">
                <h1 className="ItemListContainer__greeting--h1">{propGreetings}</h1>
            </div> 
            <div  className="ItemListContainer__loading">
                <h2 className="ItemListContainer__loading--h2">Cargando...</h2>
            </div>
        </>
    )
}


export default ItemListContainer