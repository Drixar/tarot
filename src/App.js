
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
       <Menu />
      <ItemListContainer greeting = 'Bienvenido a Una Pequeña Tienda de Tarot'/>
    </div>
  );
}

export default App;
