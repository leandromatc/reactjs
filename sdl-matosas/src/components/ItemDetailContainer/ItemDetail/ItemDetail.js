import { ItemCount } from "./ItemCount/ItemCount"
import './itemDetail.css'


export const ItemDetail = ({item}) => {



    return (
        <div className="detail__card">
            <div>
                <img src={item.img} alt={item.desc}/>
            </div>
            <div>
                <h3 className="detail__title">{item.nombre}</h3>
                <p className="detail__desc">{item.desc}</p>
                <p>PRECIO:<span className="detail__price">${item.precio}</span></p>
                <ItemCount />
            </div>
        </div>

    )
}