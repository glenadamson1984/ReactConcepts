// src/components/Modal.tsx
import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose} // clicking backdrop closes modal
    >
      <div
        style={{ background: "white", padding: "20px", borderRadius: "8px" }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        {children}
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
}
