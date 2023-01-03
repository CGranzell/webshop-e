import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './layout/Footer';
import Home from './pages/Home';
import Products from "./pages/Products";

function App() {
  return (
    <div>
    <BrowserRouter>

     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Products />} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
