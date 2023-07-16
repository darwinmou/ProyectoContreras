import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Navv from "./components/NavBar";
import CartList from "./components/CartList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Item from "./components/Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "./components/ItemDetail";
import ItemList from "./components/ItemList";

function App() {
  return (
    <BrowserRouter>
      <Navv />
      <Routes>
       <Route exact path="/" element={ <ItemListContainer />} />
       <Route exact path="/category/:id" element={<ItemListContainer/>} />
       <Route exact path="/item/:id" element={<ItemDetailContainer/>} />       
       <Route exact path="/carrito" element={<CartList />} />
       <Route exact path="/test" element={<ItemList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
