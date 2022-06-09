import './navbar.css'
import {CartWidget} from './CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'

function Navbar()  {

    return (
        <nav>
            <span className='logo'><Link to='/'>SUPLEMENTOS DEL LITORAL</Link></span>
            <ul className='nav__links'>
                <li><Link to={"/"} className='nav__link' >Inicio</Link></li>
                {/* <li><Link to={"/productos"} className='nav__link' >Productos</Link></li> */}
                <li><Link to={"/nosotros" }className='nav__link' >Nosotros</Link></li>
                <li><Link to={"/contacto"} className='nav__link' >Contacto</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default Navbar;
