//ITEM DETAIL e ITEM son COMPONENTES PRESENTACIONALES. Solo reciben info y la muestran

import './style.css';
import ItemCount from '../itemCount';
// import { useState } from 'react';

const ItemDetail = ({details, onAdd}) => {
    // const [cartButton, setCartButton] = useState(true);

    return (
        <>
            <div className="Item_detail">
                <div>
                    <img src={details.pictureURL} alt={details.name} />
                </div>
                <div className="Item__info">
                    <h3>{details.title}</h3>
                    <p className="Item__info--description">{details.description}</p>
                    <p className="Item__info--price"> {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(details.price)}</p>
                    <p className="Item__info--stock">Stock: {details.stock}</p>
                    <ItemCount stock={details.stock} initial={0} agregar={onAdd} name={details.name} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;