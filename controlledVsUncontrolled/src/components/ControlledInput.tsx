// src/components/ControlledInput.tsx
import React, { useState } from "react";

export function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={value} // value comes from React state
        onChange={(e) => setValue(e.target.value)} // state updates on every change
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
    </div>
  );
}
