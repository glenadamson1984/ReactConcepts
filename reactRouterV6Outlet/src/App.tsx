import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Layout from "./routes/Layout.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
