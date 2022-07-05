import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import './assets/styles/app.scss'
import { CartContext, ConfigContext } from './context/index'
import React, { useState } from "react";

function App() {
    const [cartProducts, setCartProducts] = useState([]);
    const [config] = useState({
        'currency': '$',
        'language': 'en_US'
    })

  return (
    <div className="app-frames">
        <ConfigContext.Provider value={{config}}> 
            <CartContext.Provider value={{cartProducts, setCartProducts}}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </CartContext.Provider>
        </ConfigContext.Provider>
    </div>
  );
}

export default App;
