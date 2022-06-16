import { ItemDetail } from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import { useState, useEffect } from "react";
import { leerProductos } from "../../mock/leerProductos";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        leerProductos()
        .then((resp) => {
            setItem( resp.find((item) => item.id === Number(itemId)) )
        })
        .catch((error) => {
            console.log('ERROR', error)
        })
        .finally(() => {
            setLoading( false )
        })
    }, );

    return (
        <div className="container my-5">

            {
                loading ? "Cargando" : <ItemDetail item={item} />
            }
        </div>
        )

}

