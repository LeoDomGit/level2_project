import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Todo1 from "./pages/Todo1";
import Todo2 from "./pages/Todo2";
import Page404 from "./pages/Page404";
import Logout from "./pages/Logout";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

import "./index.css";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/todo1" element={<Todo1/>}/>
          <Route path="/todo2" element={<Todo2/>}/>
          <Route path="/chitiet/:id" element={<Detail />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
