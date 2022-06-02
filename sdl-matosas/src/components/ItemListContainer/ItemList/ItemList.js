import Item from "../../Item/Item"
import './itemList.css'



const ItemList = ( {items} ) => {

    return (
        <div className="card__list">
            <h2 className="title">Nuestro productos</h2>

            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    )
}

export default ItemList