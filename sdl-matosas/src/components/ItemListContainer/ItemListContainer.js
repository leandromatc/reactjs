import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import './itemListContainer.css'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- armar la referencia
        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
        // 2.- (async) llamar a Firebase con la referencia anterior
        getDocs(q)
            .then((resp) => {
                setItems( resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) )
            })
            .finally(() => {
                setLoading(false)
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