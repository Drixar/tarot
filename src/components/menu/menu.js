import './menu.css';
import CartWidget from '../CartWidget.js/CartWidget';
import LogoTienda from '../LogoTienda/LogoTienda';


const Menu = () => {
    return (
        <div>
            <div className= 'encabezado'>

                <LogoTienda/>
                <CartWidget/>
            </div>
            <div>
            <ul className="menu">
                <li><a>Inicio</a></li>
                <li><a>Nosotros</a></li>
                <li><a>Tienda</a></li>
                <li><a>Contacto</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Menu