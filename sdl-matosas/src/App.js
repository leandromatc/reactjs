import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto } from './components/Contacto/Contacto';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Productos } from './components/Productos/Productos';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


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

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;