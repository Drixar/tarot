import carrito from './shopping.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="carro">
            <img src={carrito} alt='cart-widget'/>
        </div>
    )
}

export default CartWidget