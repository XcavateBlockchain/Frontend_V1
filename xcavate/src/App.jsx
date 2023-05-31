import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Property from "./Components/Property";
import Profile from "./Components/Profile";
import PropertyInfo from "./Components/PropertyInfo";
import ListedInfo from "./Components/ListedInfo";
import Marketplace from "./Components/Marketplace";
import RealEstate from "./Components/RealEState";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market-place" element={<Marketplace />} />
            <Route path="/real-estate" element={<RealEstate />} />
            {/* Other routes */}
          </Routes>
        
      {/* <RealEstate/> */}
      {/* <Home /> */}
      {/* <Marketplace/>
      <Property /> */}
      {/* <Profile/> */}
      {/* <PropertyInfo/>
      <ListedInfo/> */}

    </>
  );
}

export default App;
