import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer";

function App() {

  return (
    <div className="max-h-max w-screen flex flex-col bg-slate-300">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default App;
