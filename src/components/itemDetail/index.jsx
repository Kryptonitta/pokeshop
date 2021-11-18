//ITEM DETAIL e ITEM son COMPONENTES PRESENTACIONALES. Solo reciben info y la muestran

import './style.css';
import ItemCount from '../itemCount';
import { useState } from 'react';

const ItemDetail = ({details,onAdd}) => {
    // const [cartButton, setCartButton] = useState(true);

    // const [quantityToAdd, setQuantityToAdd] = useState(null);
  
    // const onAdd = (quantityToAdd) => {
    //   if (quantityToAdd >= 1) {
    //     setQuantityToAdd(quantityToAdd);
    //     setCartButton(false);
    //   }
    // };

    return (
        <>
            <div className="Item_detail">
                <div>
                    <img src={details.pictureURL} alt={details.name} />
                </div>
                <div className="Item__info">
                    <h3>{details.name}</h3>
                    <p className="Item__info--price"> {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(details.price)}</p>
                    <p className="Item__info--description">{details.description}</p>
                    <ItemCount stock={details.stock} initial={0} onAdd={onAdd} name={details.name} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;