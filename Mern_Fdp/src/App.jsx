import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Component/Navbar";

function App() {
  const name = "hema"; 
useEffect(()=>{
  console.log("COmponent Mounted")
})
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name={name} />} />
        <Route path="/ab" element={<About />} />
        <Route path="/ser" element={<Service />} />
        <Route path="/con" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
