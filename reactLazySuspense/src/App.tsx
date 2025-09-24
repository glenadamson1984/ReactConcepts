import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Home = lazy(() => import("./routes/Home.tsx"));
const About = lazy(() => import("./routes/About.tsx"));
const Store = lazy(() => import("./routes/Store.tsx"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
