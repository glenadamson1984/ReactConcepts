import React, { useState, useMemo, useCallback } from "react";

// 🔹 Child component wrapped in React.memo
// React.memo = Only re-render if props change (shallow comparison)
const Child = React.memo(
  ({ onClick, label }: { onClick: () => void; label: string }) => {
    console.log(`🔄 Rendering Child: ${label}`);
    return <button onClick={onClick}>{label}</button>;
  }
);

export default function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // 🔹 useMemo caches the result of an expensive calculation
  // It only re-runs when `count` changes
  const expensiveCalculation = useMemo(() => {
    console.log("⚡ Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  // 🔹 useCallback memoizes a function so its identity doesn’t change on re-renders
  // Useful because Child is memoized with React.memo → it won’t re-render unless `onClick` reference changes
  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo + useMemo + useCallback</h1>

      {/* shows expensive value */}
      <p>Expensive result: {expensiveCalculation}</p>

      {/* Child only re-renders if `handleClick` changes (but it’s stable due to useCallback) */}
      <Child onClick={handleClick} label="Increment Count" />

      <p>Count: {count}</p>

      {/* Updating other state won’t re-run expensive calc (because we memoized it) */}
      <button onClick={() => setOther((o) => o + 1)}>
        Increment Other ({other})
      </button>
    </div>
  );
}
