import { ItemCount } from "./ItemCount/ItemCount"
import './itemDetail.css'
import { useState } from "react";


export const ItemDetail = ({item}) => {

    const [contador, setContador] = useState(1);

    const handleAgregar = () => {
        const itemCart = {
            ...item,
            cantidad: contador,
        }

        console.log(itemCart)
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
                <ItemCount 
                    stock={item.stock} 
                    item={item} 
                    setCantidad={setContador}
                    cantidad={contador}
                    handleAgregar={handleAgregar}  />
            </div>
        </div>
    )
}