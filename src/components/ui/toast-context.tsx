"use client";
import { createContext, useContext, useState } from "react";

type ToastType = "success" | "error" | "warning" | "info";

type ToastMessage = {
  id: string;
  type: ToastType;
  title?: string;
  description?: string;
  duration?: number;
};

interface ToastContextType {
  toasts: ToastMessage[];
  showToast: (message: Omit<ToastMessage, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    // 提供一个 fallback 实现，避免在没有 ToastProvider 的情况下出错
    return {
      toasts: [],
      showToast: (message: Omit<ToastMessage, "id">) => {
        console.log("ToastProvider not found, showing toast in console:", message);
      },
      removeToast: () => {}
    };
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, ...message }]);

    // 自动移除 toast
    setTimeout(() => {
      removeToast(id);
    }, message.duration || 3000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};