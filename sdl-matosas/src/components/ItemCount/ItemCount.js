import './itemCount.css';
import { useState } from 'react';
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi"

export const ItemCount = () => {

    const [contador, setContador] = useState(1);
    let stock = 20;

    
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    return (
        <div className='counter__box'>
            <div className='counter__input'>
                <BiMinus className='btn-subtract' onClick={restar} />
                {contador}
                <BsPlus className='btn-plus' onClick={incrementar}/>
            </div>
            <div className='btn-add'>Agregar al carrito</div>
        </div>
    )

}