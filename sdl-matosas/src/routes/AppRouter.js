import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Cart } from "../components/Cart/Cart"
import Checkout from "../components/Checkout/Checkout"
import { Contacto } from "../components/Contacto/Contacto"
import Footer from "../components/Footer/Footer"
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import Navbar from "../components/Navbar/Navbar"
import { Nosotros } from "../components/Nosotros/Nosotros"
import { Productos } from "../components/Productos/Productos"


const AppRouter = () => {



    return (

        <BrowserRouter >
        
            <Navbar />

            <Routes>

                <Route path='/' element={ <ItemListContainer />} />
                <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/productos' element={ <Productos/>} />
                <Route path='/nosotros' element={ <Nosotros/>} />
                <Route path='/contacto' element={ <Contacto/>} />
                <Route path='/cart' element={ <Cart />} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path="*" element={ <Navigate to={"/"} />} />
        
            </Routes>
            
            <Footer />
        </BrowserRouter>

    )
}

export default AppRouter