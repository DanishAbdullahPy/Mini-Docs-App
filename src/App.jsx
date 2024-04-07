import React from "react";
import "./index.css";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
Background
function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
     <Background />
     <Foreground />
    </div>
  );
}

export default App;
