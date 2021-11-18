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

    const getData = (data) =>
    //Creo la promesa que me trae los datos. SOLO los trae, pero no se muestran. Esto lo vamos a hacer con el useEffect.
        new Promise((resolve, reject) => {
            //Con el setTimeOut simulo el delay de la llamada a la api
            setTimeout(
                () => {
                if (data) {
                    resolve(data);
                } else {
                    reject("No se encontro nada");
                }
            }, 1000);
            console.log(data) //Para ver que productos me trae
        });

        

    //Vamos a usar un useEffect porque queremos que se ejecute una vez cargado el componente

    //MOSTRANDO TODOS LOS PRODUCTOS
    useEffect(
        () => {
        getData(jsonDeProductos) //es para traer el json
        .then((result) => {
            categoriaId    
            ?  setProducts(
                result.filter((product) => product.category === categoriaId) 
            )
            : setProducts(jsonDeProductos)
        })
            .catch((err) => {
                console.log(err)
            });
    },[categoriaId]);

    console.log(jsonDeProductos)
    
    //Los corchetes son para que se ejecute SOLO una vez cuando el componente se monte. Si quiero que se ejecute cada vez que se monte, pongo dentro de los corchetes el parametro.

    //El return no me admite condicionales. Es por eso que la condición de que mostrar debe realizarse con un operador ternario.
    return( 
        products.length > 0 
        ? <div className="ItemListContainer__greeting">
            <h1 className="ItemListContainer__greeting--h1">{propGreetings}</h1>
            <ItemList products={products}/>
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