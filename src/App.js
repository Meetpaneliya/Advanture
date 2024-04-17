import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"


function App() {

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-300">
      <Navbar/>

      <Routes>

        <Route path="/" element= {<Home/>} />

      </Routes>

    </div>
    )
}

export default App;
