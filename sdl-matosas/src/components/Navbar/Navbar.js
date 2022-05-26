import './navbar.css'
import {CartWidget} from './CartWidget/CartWidget.js'

function Navbar()  {

    return (
        <nav>
            <span className='logo'><a href="index.html">SUPLEMENTOS DEL LITORAL</a></span>
            <ul className='nav__links'>
                <li><a className='nav__link' href="index.html">Inicio</a></li>
                <li><a className='nav__link' href="index.html">Productos</a></li>
                <li><a className='nav__link' href="index.html">Contacto</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar;