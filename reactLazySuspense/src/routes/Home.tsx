import { lazy, Suspense } from "react";
import { useState } from "react";

// const AdminData = lazy(() => import("./AdminData.tsx")); // lazy loading looks for a default export
// when it can't find a default export, it we need to force a default return
const AdminData = lazy(() =>
  import("./AdminData.tsx").then((module) => ({ default: module.AdminData }))
);

// Lets say sum function is rarely used and is a heavy function it would be better to dynamically import it
// import { sum } from "../sum.ts";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          import("../sum.ts").then((module) => alert(module.sum(2, 2))); // dynamically import the sum function
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button onClick={() => setIsAdmin((prev) => !prev)}>Toggle Admin</button>
      {isAdmin ? (
        <Suspense fallback={<div>Loading...</div>}>
          <AdminData />
        </Suspense>
      ) : (
        <h2>Not Admin</h2>
      )}
    </>
  );
}

// EXPLANTION:

// When the code is large or rarely used, e.g. a chart library, a markdown parser, or a PDF generator. You don’t want those megabytes in your main bundle.
