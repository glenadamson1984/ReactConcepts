# React Concepts – Controlled vs Uncontrolled Components

This project demonstrates the difference between **controlled** and **uncontrolled** form inputs in React.

---

## 🎛 What’s the Difference?

- **Controlled Components**:  
  React manages the input’s value through state. The source of truth is React, not the DOM.

- **Uncontrolled Components**:  
  The DOM manages the input’s value. React accesses the value only when needed (usually via a `ref`).

---

## ✅ Controlled Example

```tsx
import React, { useState } from "react";

export function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
    </div>
  );
}
```

- The input’s value comes **directly from React state**.
- React always knows what’s inside the input.
- Best for **validation**, **form libraries**, and **dynamic UIs**.

---

## 🚀 Uncontrolled Example

```tsx
import React, { useRef } from "react";

export function UncontrolledInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    alert(`You typed: ${inputRef.current?.value}`);
  }

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

- The input **manages itself** in the DOM.
- React only checks the value when requested.
- Best for **quick forms** or **low-overhead inputs**.

---

## ⚖️ Comparison

| Feature             | Controlled                      | Uncontrolled               |
| ------------------- | ------------------------------- | -------------------------- |
| **Source of truth** | React state                     | DOM (`ref.current.value`)  |
| **Validation**      | Easy (live via state)           | Manual, usually on submit  |
| **Performance**     | More re-renders                 | Faster, fewer re-renders   |
| **When to use**     | Complex forms, validation, sync | Simple inputs, quick demos |

---

## 🛠 Combined Demo

```tsx
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
```

---

## ✨ Key Takeaways

- Use **controlled components** when you need React in charge (validation, syncing state, advanced UIs).
- Use **uncontrolled components** when you just need a simple input without heavy state management.

Both are valid, and sometimes you’ll even mix them in the same app depending on requirements.

---
