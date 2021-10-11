//Estilo
import "./style.css";
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartWidget =()=>{
    return(
        <FontAwesomeIcon icon={faShoppingCart}>
            
        </FontAwesomeIcon>
    )
    
}

export default CartWidget;