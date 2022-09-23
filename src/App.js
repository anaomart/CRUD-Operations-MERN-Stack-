import logo from './logo.svg';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import AddProduct from './components/Pages/AddProduct';
import ProductDetails from './components/Pages/ProductDetails';
import Update from './components/Pages/Update';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10 ">
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='products/add' element={<AddProduct/>}/>
          <Route path='products/:productId' element={<ProductDetails/>}/>
          <Route path='products/update/:productId' element={<Update/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
