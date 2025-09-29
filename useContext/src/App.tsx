import { Header } from "./components/Header";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: theme === "light" ? "#fff" : "#0f172a",
          color: theme === "light" ? "#0f172a" : "#fff",
          transition: "background 150ms ease, color 150ms ease",
        }}
      >
        <Header />
        <h1>Theme: {theme}</h1>
        <button
          onClick={toggle}
          className="mt-4 px-4 py-2 rounded border"
          aria-label="Toggle theme"
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default App;
