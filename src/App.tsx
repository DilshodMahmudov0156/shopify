import React, {useEffect} from 'react';
import {useStore} from "./store/index";
import {CartProvider} from "react-use-cart";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page";
import CartPage from "./pages/cart-page";
import Products from "./components/section/products-part/products";
import ProductPage from "./pages/product-page";
import Footer from "./components/footer/footer";


function App(): React.FC {

    const { getProducts } = useStore();

    useEffect(()=> {
        fetch('../furnitures.json')
            .then((response) => response.json())
            .then((data) => {
                getProducts(data.products);
            });
    }, []);

    return (
        <Router>
            <CartProvider>
                <div className="app">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/products/:id" element={<ProductPage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </CartProvider>
        </Router>
    );
};

export default App;