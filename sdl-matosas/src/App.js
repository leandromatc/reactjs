
import Navbar from './components/Navbar/Navbar.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'

function App() {

  const prods = 'Aquí van a ir todos los productos'

  return (
    <div>

      <Navbar />
      <ItemListContainer productos={prods} />

    </div>
  );
}

export default App;
