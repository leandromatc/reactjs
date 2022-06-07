import { ItemDetail } from "./ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import { useState, useEffect } from "react";
import { customFetch } from "../../mock/customFetch";
import { leerProductos } from "../../mock/leerProductos";

export const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});



    useEffect(() => {
        leerProductos()
        .then((resp) => {
            customFetch(2000, resp.find(item => item.id === 1))
                .then(result => setDato(result))
                .catch(err => console.log(err))

        })
        .catch((error) => {
            console.log('ERROR', error)
        })
    }, []);

    return (
        <div className="container my-5">

            <ItemDetail item={dato}/>

        </div>
        )

}

