import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/about/About";
import Main from "./pages/main/Main";
import Catalog from "./pages/catalog/Catalog";
import Product from "./pages/product/Product";
import Header from "./componets/header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="product" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
