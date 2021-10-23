//React
import {useState,useEffect} from "react";
import ItemList from "../../components/itemList";
//Style
import "./style.css";
//JSON
import productos from "../../products.json";

const ItemListContainer=({propGreetings})=>{

    const [products,setProducts] = useState([])

    // //Async al JSON --> ESTÁ BIEN ESTE PERO ES CON ASYNC Y NO TIENE EL SET TIME OUT
    // useEffect(async()=>{
    //     const response = await fetch ("./assets/products.json")
    //     const json = await response.json()
    //     console.log(json) //esto está bien. NO tocar
    //     setProducts(json)
    // },[])

    //Async al JSON
    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("No se encontro nada");
                }
            }, 2000);
        });

    useEffect(() => {
        getData(productos)
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    }, []); //Los corchetes son para que no se produzca un loop infinito

    return(
        <>
            <div className="ItemListContainer__greeting">
                <h1 className="ItemListContainer__greeting--h1">{propGreetings}</h1>
                {/* OPCIÓN 01 */}
                {/* <ItemCount stock="5" initial="1"/>      */}
                {/* OPCIÓN 02 */}
                {/* <ItemCount stock={10} initial={0} onAdd={(cantidad) => {console.log(cantidad)}}/> */}
            </div>

            <div>
                <ItemList products={products}/>
            </div>
        </>
    )
}

export default ItemListContainer;

