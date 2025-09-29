# React Concepts – Custom Hook Example: useWindowSize

This project demonstrates how to build and use a **custom React hook** called `useWindowSize`.  
The hook listens for window resize events and provides the current width and height of the browser window.

---

## 🎯 Why a Custom Hook?

Custom hooks in React let you:

- **Extract reusable logic**: no need to repeat the same event listener code in every component.
- **Keep components clean**: focus on rendering, while the hook handles side effects and state.
- **Stay consistent**: follow React’s hooks pattern across your app.

---

## 🛠️ The Hook

```tsx
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // update immediately

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size; // { width, height }
}
```

---

## 📦 Example Usage

```tsx
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
```

---

## ⚡ Key Learning Points

1. **State initialization**: starts with `window.innerWidth` and `window.innerHeight`.
2. **Effect setup**: `useEffect` attaches an event listener for `"resize"`.
3. **Cleanup**: removes the event listener when the component unmounts.
4. **Re-rendering**: React updates the component whenever the hook’s state changes.
5. **Visual feedback**: background color changes when crossing 600px width.

---

## ✅ Benefits of `useWindowSize`

- Simple API → just call `const { width, height } = useWindowSize()`.
- Reusable in multiple components without duplication.
- Encourages proper side-effect handling and cleanup in React.
- Great teaching example for **custom hooks**.

---
