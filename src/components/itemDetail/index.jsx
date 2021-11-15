//ITEM DETAIL e ITEM son COMPONENTES PRESENTACIONALES. Solo reciben info y la muestran

import './style.css';
import ItemCount from '../itemCount'; //RUTEAR BIEN

const ItemDetail = ({ name, description, stock, photo, price, onAdd }) => {

    return (
        <>
            <div className="Item_detail">
                <div>
                    <img src={photo} alt={photo} />
                </div>
                <div className="Item__info">
                    <h3>{name}</h3>
                    <p className="Item__info--price"> {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)}</p>
                    <p className="Item__info--description">{description}</p>
                    <ItemCount stock={stock} initial={0} onAdd={onAdd} name={name} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;