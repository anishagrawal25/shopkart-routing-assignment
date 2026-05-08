import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      
      {/* TODO: Implement Routing Here */}
      <Routes>
        <Route path="/" elements={<Home/>}/>
        <Route path="/about" elements={<About/>}/>
        <Route path="/contact" elements={<Contact/>}/>

      </Routes>

      
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
