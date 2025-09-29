import React, { useEffect } from "react";

export default function App() {
  //useEffect hook is a hook that allows you to perform
  // side effects in your component

  useEffect(() => {
    console.log("👋 App mounted!");

    // optional cleanup function
    return () => {
      console.log("👋 App unmounted!");
    };
  }, []); // empty dependency array = run only once (on mount)

  return (
    <div className="p-6">
      <h1>Hello useEffect</h1>
    </div>
  );
}
