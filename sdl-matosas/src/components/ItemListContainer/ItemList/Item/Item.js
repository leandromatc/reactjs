import './item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    return (
        <div className="item__card">
            <img className='card__img' src={item.img} alt="{item.desc}"/>
            <h2 className="card__title">{item.nombre}</h2>
            <Link to={`/item/${item.id}`}>
                <button className='btn btn-outline-primary btn-sm'>Ver más</button>
            </Link>
        </div>
    )
}

export default Item