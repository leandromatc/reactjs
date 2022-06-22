import { ItemDetail } from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        // 1.- armar la referencia
        const docRef = doc(db, "productos", itemId)
        // 2.- llamar a firestore
        getDoc(docRef)
            .then((resp) => {
                setItem( {id: resp.id, ...resp.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId]);

    return (
        <div className="container my-5">

            {
                loading ? "Cargando" : <ItemDetail item={item} />
            }
        </div>
        )

}

