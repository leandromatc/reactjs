import './item.css'


const Item = ({item}) => {

    return (
        <div className="item__card">
            <img className='card__img' src={item.img} alt="{item.desc}"/>
            <h2 className="card__title">{item.nombre}</h2>
        </div>
    )
}

export default Item