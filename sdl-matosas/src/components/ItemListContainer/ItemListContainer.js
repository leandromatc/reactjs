import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { leerProductos } from "../../mock/leerProductos"
import ItemList from "../ItemList/ItemList"
import './itemListContainer.css'



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        leerProductos()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems(resp.filter((item) => item.category === categoryId))
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
            setLoading( false )
        })
    }, [categoryId])

    return (
        <section className="products__section container my-5">
            
            <div className="categorias">
                <h3>CATEGORÍAS</h3>
                <hr/>
                <Link to='/categorias/profit' className="category__link">PRO-FIT</Link>
                <Link to='/categorias/nutrexresearch' className="category__link">Nutrex Research</Link>
                <Link to='/categorias/dux' className="category__link">DUX</Link>
                <Link to='/categorias/bodybuilders' className="category__link">Body Builders</Link>
            </div>
            {
                
                loading ? "Cargando" : <ItemList items={items}/>

            }
            
        </section>
    )
}