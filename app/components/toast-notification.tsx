"use client";

import React from "react";
import { useStore } from "../context/store-context";
import { SparkleIcon, CloseIcon } from "./icons";

export default function ToastNotification() {
  const { toastMessage, dismissToast, openCart } = useStore();

  if (!toastMessage) return null;

  const isCartAction = toastMessage.toLowerCase().includes("cart");

  return (
    <div className="toast-wrapper" role="status" aria-live="polite">
      <div className="toast-bubble">
        <SparkleIcon size={16} className="text-amber-300 shrink-0" />
        <span className="toast-text">{toastMessage}</span>
        {isCartAction && (
          <button
            type="button"
            className="toast-action"
            onClick={() => {
              dismissToast();
              openCart();
            }}
          >
            View Bag
          </button>
        )}
        <button
          type="button"
          className="toast-close"
          onClick={dismissToast}
          aria-label="Dismiss message"
        >
          <CloseIcon size={14} />
        </button>
      </div>
    </div>
  );
}
