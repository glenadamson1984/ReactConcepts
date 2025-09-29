// src/components/UncontrolledInput.tsx
import React, { useRef } from "react";

export function UncontrolledInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    alert(`You typed: ${inputRef.current?.value}`);
  }

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input
        type="text"
        ref={inputRef} // React doesn’t manage value — DOM does
        placeholder="Type something..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
