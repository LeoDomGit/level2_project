import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Todo1 from "./pages/Todo1";
function App() {
  const [cates,setCate]= useState([]);
  const [brands,setBrand]= useState([]);

  const getValue = async ()=>{
    const result = await fetch('https://students.trungthanhweb.com/api/home?apitoken='+localStorage.getItem('token'))
    .then((res)=>res.json());
    if(result.categrories){
    setCate(result.categrories);
    }
    if(result.brands){
      setBrand(result.brands);
    }

  }
  useEffect(()=>{
    if(localStorage.getItem('token')&& localStorage.getItem("token")!=null){
      getValue();
    }
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home cates={cates} brands={brands}/>}/>
          <Route path="/products" element={<Products cates={cates} brands={brands}/>}/>
          <Route path="/todo" element={<Todo cates={cates} brands={brands}/>}/>
          <Route path="/todo1" element={<Todo1 cates={cates} brands={brands}/>}/>

          <Route path="*" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
