// src/App.tsx
import React from "react";
import { ControlledInput } from "./components/ControlledInput";
import { UncontrolledInput } from "./components/UncontrolledInput";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Controlled vs Uncontrolled Inputs</h1>
      <ControlledInput />
      <hr />
      <UncontrolledInput />
    </div>
  );
}
