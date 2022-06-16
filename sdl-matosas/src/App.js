import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto } from './components/Contacto/Contacto';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Productos } from './components/Productos/Productos';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { useState } from 'react'
import { CartContext } from './context/CartContext'

function App() {

  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart( [...cart, item] )
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const totalPrice = () => {
    return cart.reduce( (acc, prod) => acc += (prod.precio * prod.cantidad), 0)
  }

  const totalQuantity = () => {
    return cart.reduce((acc,prod) => acc += prod.cantidad, 0)
  }

  const emptyCart = () => {
    setCart( [] )
  }


  return (

    <CartContext.Provider value={ {cart, addItem, isInCart, totalPrice, totalQuantity, emptyCart} }>

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

        </Routes>
        
      </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;