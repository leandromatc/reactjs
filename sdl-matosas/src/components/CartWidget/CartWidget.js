import './cartWidget.css'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const {totalQuantity} = useCartContext()

    

    return (
        <Link to={"/cart"}> 
            <FaShoppingCart className='cart__btn'/> 
            <span className='cart__quant'>{totalQuantity()}</span>
            </Link> 
    )

}