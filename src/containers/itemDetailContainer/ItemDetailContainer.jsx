import { useEffect, useState } from "react";
import { useParams } from "react-router";
import productos from "../../products.json";
import ItemDetail from "../../components/itemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    // const { itemId } = useParams();

    const itemId = 2;

    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject('No se encontró nada');
                }
            }, 1500);
        });

    useEffect(() => {
        getItem(productos)
            .then((res) => {
                setItem(res.find((details) => details.id === itemId));
            })

            .catch((err) => console.log(err));
    }, [itemId]);



    return (
        <>
            <h2>Item detail Container</h2>
            <div className="itemDetailContainer">
                {item ? (
                    <ItemDetail
                        id={item.id}
                        name={item.title}
                        photo={item.pictureURL}
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                    />
                ) : (
                    "Cargando ficha de productos..."
                )}
            </div>
        </>
    );
}

export default ItemDetailContainer;