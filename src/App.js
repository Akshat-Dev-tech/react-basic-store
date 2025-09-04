import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Home from './Home';
import Product from './Product';
import Productsaga from './Productsaga';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product />} />
      <Route path="/productsaga" element={<Productsaga />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
