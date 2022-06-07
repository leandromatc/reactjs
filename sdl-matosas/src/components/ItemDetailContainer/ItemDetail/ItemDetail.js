import { ItemCount } from "./ItemCount/ItemCount"
import './itemDetail.css'


export const ItemDetail = ({dato}) => {



    return (
        <>
        <img src={dato.img} alt={dato.desc}/>
        <h3 className="detail__title">{dato.nombre}</h3>
        <p className="detail__desc">{dato.desc}</p>
        <p>PRECIO:<span className="detail__price">${dato.precio}</span></p>
        
        <ItemCount />
        </>

    )
}