import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/fragments/ItemListContainer/ItemListContainer';



function App() {
  return (
      <>
        <NavBar/>
        <ItemListContainer title='Productos'/>
      </>
  );
}

export default App;
