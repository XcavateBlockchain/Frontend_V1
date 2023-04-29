import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Property from "./Components/Property";
import Profile from "./Components/Profile";
import ListProperty from "./Components/ListProperty";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Home />
      {/* <Property /> */}
      {/* <Profile/> */}
      <ListProperty/>
    </>
  );
}

export default App;
