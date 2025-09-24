import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
