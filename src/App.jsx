import React, { useState } from "react";
import "./App.css";
import Footer from "./Compoenents/Footer";
import Header from "./Compoenents/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductPaga from "./Pages/ProductPaga";
import Context from "./ContextApi/Context";
import SimpleSlider from "./Compoenents/minitv";
import SignUp from './Pages/signup';
import SignIn from './Pages/signin';
import { AuthProvider } from "./ContextApi/AuthContext";

function App() {
    const [token, setToken] = useState(null);
  return (
    <>
    <AuthProvider>
    <Context>
      <Header />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/CartPage" element={<CartPage />}/>
          <Route path={`/ProductPaga/:id`} element={<ProductPaga />}/>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn setToken={setToken} />} />
          <Route path="/Compoenents/minitv"  element={<SimpleSlider/>}/>
          
        </Routes>
      <Footer />
      </Context>
      </AuthProvider>
    </>
  );
}

export default App;

CartPage
