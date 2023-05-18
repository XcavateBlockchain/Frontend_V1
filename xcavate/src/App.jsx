import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] border">
        <h1 className="text-blue-500 text-5xl font-bold ">Hello World , <br/> Welcome to Xcavate</h1>
      </div>
    </>
  );
}

export default App;
