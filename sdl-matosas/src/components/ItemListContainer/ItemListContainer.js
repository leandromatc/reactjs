import { useEffect, useState } from "react"
import { leerProductos } from "../../mock/leerProductos"
import ItemList from "./ItemList/ItemList"



export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {

        leerProductos()
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }, [])

    return (
        <section className="container my-5">
            
            {
                
                <ItemList items={items}/>

}
            
        </section>
    )
}