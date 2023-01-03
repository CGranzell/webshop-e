import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div>
    <BrowserRouter>

     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
