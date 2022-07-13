import Item from "../Item/Item"
import './itemList.css'



const ItemList = ( {items} ) => {

    return (
        <div className="prod__section">

            <div className="card__list">
                {
                    items.map((item) => <Item key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

export default ItemList