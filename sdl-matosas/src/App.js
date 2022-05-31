
import Navbar from './components/Navbar/Navbar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemCount} from './components/ItemCount/ItemCount'

function App() {

  const prods = 'Aquí van a ir todos los productos'

  return (
    <div>

      <Navbar />
      <ItemListContainer productos={prods} />
      <ItemCount/>
    </div>
  );
}

export default App;
