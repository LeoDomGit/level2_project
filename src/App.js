import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Products from "./pages/Products";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/todo" element={<Todo/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
