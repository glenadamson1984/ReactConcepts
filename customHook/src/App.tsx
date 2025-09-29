// src/App.tsx
import React from "react";
import { useWindowSize } from "./hooks/useWindowSize";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: width > 600 ? "#c7d2fe" : "#fbcfe8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Custom Hook: useWindowSize</h1>
      <p>
        Current window size:{" "}
        <strong>
          {width}px × {height}px
        </strong>
      </p>
      <p>(Try resizing your browser 👀)</p>
    </div>
  );
}
