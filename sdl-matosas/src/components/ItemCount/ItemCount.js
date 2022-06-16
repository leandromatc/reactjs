import './itemCount.css';
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi"

export const ItemCount = ({stock, setCantidad, cantidad, handleAgregar}) => {



    
    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }



    return (
        <div>
            <div className='counter__box'>
                <div className='counter__input'>
                    <BiMinus className='btn-subtract' onClick={handleRestar} />
                    {cantidad}
                    <BsPlus className='btn-plus' onClick={handleSumar}/>
                </div>
                <div className='btn btn-outline-primary my-3' onClick={handleAgregar}>Agregar al carrito</div>
            </div>
        </div>
    )

}