//React
import {useState,useEffect} from "react";
import ItemList from "../../components/itemList";
//Style
import "./style.css";
//JSON
import productos from "../../products.json";

const ItemListContainer=({propGreetings})=>{

    //OPCIÓN TRAER TODOS LOS PRODUCTOS
    const [products,setProducts] = useState([])
 
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
        });

    //Vamos a usar un useEffect porque queremos que se ejecute una vez cargado el componente

    //MOSTRANDO TODOS LOS PRODUCTOS
    useEffect(() => {
        getData(productos)
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    }, []); 
    
    //FILTRANDO POR PRECIO
        // useEffect(() =>{
        //     getData(productos)
        //     .then((data)=>{
        //         let filterPrecio = data.filter((productos) =>productos.price===400);
        //         setProducts(filterPrecio)
        //         console.log(filterPrecio)
        //     })
        // },[]) 

    //FILTRANDO POR category
    // useEffect(() =>{
    //     getData(productos)
    //     .then((data)=>{
    //         let filterCategory = data.filter((productos) =>productos.category==="normal");
    //         if (filterCategory>0){
    //             setProducts(filterCategory)
    //             console.log(filterCategory)
    //         }else{
    //             console.log("no hay productos")
    //         }
    //     })
    //     .catch(()=>{
    //         console.log("no hay data")
    //     })
    // },[]) 

        //Los corchetes son para que se ejecute SOLO una vez cuando el componente se monte. Si quiero que se ejecute cada vez que se monte, pongo dentro de los corchetes el parametro.

    //El return no me admite condicionales. Es por eso que la condición de que mostrar debe realizarse con un operador ternario.
    return( 
        products.length > 0 
        ? <div className="ItemListContainer__greeting">
            <h1 className="ItemListContainer__greeting--h1">{propGreetings}</h1>
            <ItemList products={products} propGreetings={propGreetings}/>
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

export default ItemListContainer;

