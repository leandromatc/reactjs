import {  useCartContext } from "../../context/CartContext"
import { BsTrashFill } from 'react-icons/bs'
import './cart.css'
import { Link } from "react-router-dom"

export const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()


    let contador = 0;


    return (

        <div className="container my-3">
            <h2>CARRITO</h2>

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{++contador}</th>
                                <td>{item.nombre}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.precio * item.cantidad}</td>
                                <td onClick={() => removeItem(item.id)} className="colorbtn"><BsTrashFill/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3>TOTAL: ${totalPrice()}</h3>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
            <Link to="/" className="btn btn-outline-primary mx-3">Seguir comprando</Link>
        </div>
    )
    
}