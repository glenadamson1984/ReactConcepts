# React Concepts – Error Boundaries Example

This project demonstrates how to handle runtime errors gracefully in React using the [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) library.

---

## 🚨 What Are Error Boundaries?

- In React, **error boundaries** catch JavaScript errors in their child component tree.
- Instead of crashing the entire app, they show a **fallback UI**.
- This is essential when dealing with unreliable components (e.g. charts, 3rd-party widgets, lazy-loaded modules).

---

## ⚡ Why `react-error-boundary`?

React still requires **class components** to implement error boundaries.  
That means the traditional approach looks like this:

```tsx
class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) { ... }
  componentDidCatch(error, info) { ... }
  render() { ... }
}
```

While it works, it introduces class components into an otherwise **modern, hooks-only project**.

### ✅ Benefits of `react-error-boundary`

- **Functional component friendly**: lets us stay consistent with hooks and function components.
- **Simpler API**: just provide a `FallbackComponent` (or `fallbackRender`).
- **Error recovery**: supports reset logic (`onReset`, `resetKeys`) so users can try again without a full page reload.
- **Less boilerplate**: no need to hand-write lifecycle methods (`getDerivedStateFromError`, `componentDidCatch`).
- **Battle-tested**: maintained by Brian Vaughn (React core team), widely used across the ecosystem.

---

## 🛠️ Example Usage

```tsx
import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function BrokenComponent() {
  throw new Error("💥 I crashed!");
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <BrokenComponent />
    </ErrorBoundary>
  );
}
```

---

## 📌 Key Takeaways

- Error boundaries **protect the rest of your app** from crashing when one component fails.
- We used `react-error-boundary` to:
  - Keep codebase functional & hooks-only.
  - Reduce boilerplate.
  - Gain built-in recovery patterns.
- We avoided the traditional class-based approach because it feels outdated, adds extra code, and breaks consistency in a modern React + TypeScript project.
