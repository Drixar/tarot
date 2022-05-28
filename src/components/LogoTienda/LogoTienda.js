import logo from './logo.png'
import './LogoTienda.css'

const LogoTienda = () => {
    return (
        <div className="logo">
            <img src={logo} alt='logo'/>
            <p> Una Pequeña tienda de Tarot</p>
        </div>
    )
}

export default LogoTienda