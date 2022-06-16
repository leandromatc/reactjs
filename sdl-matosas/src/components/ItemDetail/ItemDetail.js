import { ItemCount } from "../ItemCount/ItemCount"
import './itemDetail.css'
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


export const ItemDetail = ({item}) => {

    const {addItem, isInCart} = useCartContext();

    const [contador, setContador] = useState(1);


    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad: contador,
        }
        addItem(itemToCart)
    }

    return (
        <div className="detail__card">
            <div>
                <img src={item.img} alt={item.desc}/>
            </div>
            <div>
                <h3 className="detail__title">{item.nombre}</h3>
                <p className="detail__desc">{item.desc}</p>
                <p>PRECIO:<span className="detail__price">${item.precio}</span></p>
                <hr />
                {
                    isInCart(item.id) ? 
                    <>
                    <Link to={"/cart"} className="btn btn-primary">Terminar mi compra</Link>
                    <Link to="/" className="btn btn-outline-primary mx-3">Seguir comprando</Link>
                    </>
                    :
                    <ItemCount 
                    stock={item.stock} 
                    item={item} 
                    setCantidad={setContador}
                    cantidad={contador}
                    handleAgregar={handleAgregar}  
                    />
                }

            </div>
        </div>
    )
}