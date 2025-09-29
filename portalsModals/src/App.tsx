import { useState } from "react";
import { Modal } from "./components/Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Portals & Modals Example</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>Hello from the Modal!</h2>
          <p>This content is rendered outside of #root 🎉</p>
        </Modal>
      )}
    </div>
  );
}
