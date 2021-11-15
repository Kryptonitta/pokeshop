//ITEM DETAIL e ITEM son COMPONENTES PRESENTACIONALES. Solo reciben info y la muestran

import './style.css';
// import ItemCount from '../ItemCount/ItemCount'; //RUTEAR BIEN

const ItemDetail = ({ name, description, stock, photo, price, onAdd }) => {

    return (
        <>
            <div className="itemDetail">
                <div>
                    <img src={photo} alt={photo} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p> {Intl.NumberFormat('es-CL', { style: 'currency', currency: 'ARS' }).format(price)}</p>
                    <p>{description}</p>
                    {/* <ItemCount stock={stock} initial={0} onAdd={onAdd} name={name} /> */}
                </div>
            </div>
        </>
    );
}

export default ItemDetail;