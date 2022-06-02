import './item.css'
import { ItemCount } from './ItemCount/ItemCount'


const Item = ({item}) => {

    return (
        <div className="item__card">
            <img src={item.img} alt="{item.desc}"/>
            <h2 className="card__title">{item.nombre}</h2>
            <p className="card__desc">{item.desc}</p>
            <p>Precio: <span className="card__price">${item.precio}</span></p>
            <ItemCount/>
        </div>
    )
}

export default Item