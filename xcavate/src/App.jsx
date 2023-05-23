import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Property from "./Components/Property";
import Profile from "./Components/Profile";
import PropertyInfo from "./Components/PropertyInfo";
import ListedInfo from "./Components/ListedInfo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Home />
      <Property />
      <Profile/>
      <PropertyInfo/>
      <ListedInfo/>

    </>
  );
}

export default App;
