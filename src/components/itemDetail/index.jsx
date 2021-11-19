//ITEM DETAIL e ITEM son COMPONENTES PRESENTACIONALES. Solo reciben info y la muestran

import './style.css';
import ItemCount from '../itemCount';
// import { useState } from 'react';

//"productos" viene de ItemDetailContainer.jsx. Si modifico ahí el nombre lo tengo que modificar acá. Es la manera de referenciar al producto.
//"onAdd" viene de ItemCount. Es la función del contador
const ItemDetail = ({productos, onAdd}) => {
    // const [cartButton, setCartButton] = useState(true);

    return (
        <div className="Item_Container">
            <div className="Item_detail">
                <div>
                    <img src={productos.pictureURL} alt={productos.name} />
                </div>
                <div className="Item__info">
                    <h3>{productos.title}</h3>
                    <p className="Item__info--description">{productos.description}</p>
                    <p className="Item__info--price"> {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(productos.price)}</p>
                    <p className="Item__info--stock">Stock: {productos.stock}</p>
                    <ItemCount stock={productos.stock} initial={0} agregar={onAdd} name={productos.name} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;