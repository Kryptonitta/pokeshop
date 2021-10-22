//React
import {useState,useEffect} from "react";
import ItemCount from "../../components/itemCount";
import ItemList from "../../components/itemList";
//Style
import "./style.css";
//Componentes

const ItemListContainer=({propGreetings})=>{

    const [products,setProducts] = useState([])

    //Async al JSON
    useEffect(async()=>{
        const response = await fetch ("./assets/products.json")
        const json = await response.json()
        console.log(json) //esto está bien. NO tocar
        setProducts(json)
    },[])

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

