import { ErrorBoundary } from "react-error-boundary";
import type { ReactElement } from "react";

function Fallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function BrokenComponent(): ReactElement {
  throw new Error("💥 I crashed!");
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <BrokenComponent />
    </ErrorBoundary>
  );
}
