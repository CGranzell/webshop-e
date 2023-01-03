import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from "./pages/Products";
import Product from "./pages/Product";
import Footer from './layout/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>

     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Products />} />
     <Route path="/products/:productId" element={<Product />} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
