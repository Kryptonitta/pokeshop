//React
import { useEffect, useState } from "react";
import ItemDetail from "../../components/itemDetail";
//Para filtrar
import { useParams } from "react-router";
//JSON
import jsonDeProductos from "../../products.json";


const ItemDetailContainer = () => {

    //Seteo los estados
    const [itemDetail, setItemDetail] = useState([]);
    //Para filtrar por categoría
    const {itemId} = useParams();

    //Con la promesa me traigo a todos los objetos desde la base de datos (en este caso es el JSON). Los trae pero NO LOS MUESTRA
    //Data: es el nombre de la variable que se le pasa a la promesa --> si hay "algo", trae ese "algo"... sino no trae nada
    //getItemDetailById(id) --> es el nombre que le pongo a esta constante ya que me va a traer el item by id

    //Esta lógica me sirve para cualquier componente ya que lo que hace es una promesa para traer algo pero el resto de la información se la brindo con el useEffect

    const getItemDetailById = (data) => 
        new Promise((resolve, reject) => {
            setTimeout(
                () => {
                if (data) {
                    console.log("Data desde IDC :"+data);
                    resolve(data);
                } else {
                    reject("No se encontro nada. Soy el IDC");
                }
            }, 400);
            console.log(data) //Para ver que productos me trae
        });

    //Con el use Effect lo que hago es pasarle los datos a la función getItemDetailById 
    //En este caso le voy a pasar el json de productos y le digo que me traiga el item por id
    useEffect(
        () => {
        //Hacé la promesa con el json que te pasé...
        getItemDetailById(jsonDeProductos) //¿De dónde voy a sacar los datos? Del json. Este es el nombre con el que importé el mismo
        //...si se cumple, traeme los id de los productos. El nombre "details" solo lo uso acá. Podría llamarse pepe, pepito, o como sea. Es una manera de referenciar a cda uno de los productos. Este nombre lo voy a utilizar también en ItemDetail.jsx. 
        .then((result) => {
            //Acá le digo que el nuevo estado (setItemDetail) sea el item que me traje por id
            setItemDetail(
                result.find((productos) => productos.id === itemId)
                )
        })
        //... si no se cumple, muestrame un aviso de que no se cumplió
        .catch((err) => {
            console.log("El use effect desde Item Detail Container no se pudo realizar correctamente")
        });
    },[itemId]);

    //Armo el return con el condicional ternario: Si item Detail existe, entonces muestrame el componente ItemDetail. Si no, mostrame un cartel de que el producto se está cargando....
    //Ternario: existe ItemDetail ? (traeme el componente ItemDetail con los datos del producto que le hice click) : (Mostrá que el producto se está cargando)
    
    return (
        <div className="itemDetailContainer">
        {itemDetail ? <ItemDetail productos={itemDetail} /> : <h2>"El producto se está cargando..."</h2>}
        </div>
    )
}   

export default ItemDetailContainer