import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Todo1 from "./pages/Todo1";
import Page404 from "./pages/Page404";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/todo1" element={<Todo1/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
