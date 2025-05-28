import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Component/Navbar";
import { useEffect } from "react";
import State from "./hooks/State";
import Form from "./hooks/form";
import Effect from "./hooks/Effect";

function App() {
  let name = 'hema' 
useEffect(()=>{
  console.log("Component mounted");
  return(()=>{
    console.log("Component unmounted");
  })
},[])
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name={name} />} />
        <Route path="/ab" element={<About />} />
        <Route path="/ser" element={<Service />} />
        <Route path="/con" element={<ContactUs />} />
        <Route path="/st" element={<State/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/f" element={<Effect/>}/>
      </Routes>
    </>
  )
}

export default App;
