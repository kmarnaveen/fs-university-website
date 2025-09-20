// src/hooks/use-pwa-install.ts
"use client";

import { useState, useEffect, useReducer } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

type PWAInstallState = {
  prompt: BeforeInstallPromptEvent | null;
  isIOS: boolean;
  isStandalone: boolean;
  isPromptVisible: boolean;
  isIOSInstructionsVisible: boolean;
};

type PWAInstallAction =
  | { type: "SET_PROMPT"; payload: BeforeInstallPromptEvent | null }
  | {
      type: "SET_DEVICE_INFO";
      payload: { isIOS: boolean; isStandalone: boolean };
    }
  | { type: "SHOW_PROMPT" }
  | { type: "HIDE_PROMPT" }
  | { type: "SHOW_IOS_INSTRUCTIONS" }
  | { type: "HIDE_IOS_INSTRUCTIONS" };

const initialState: PWAInstallState = {
  prompt: null,
  isIOS: false,
  isStandalone: false,
  isPromptVisible: false,
  isIOSInstructionsVisible: false,
};

function pwaInstallReducer(
  state: PWAInstallState,
  action: PWAInstallAction
): PWAInstallState {
  switch (action.type) {
    case "SET_PROMPT":
      return { ...state, prompt: action.payload };
    case "SET_DEVICE_INFO":
      return { ...state, ...action.payload };
    case "SHOW_PROMPT":
      return { ...state, isPromptVisible: true };
    case "HIDE_PROMPT":
      return { ...state, isPromptVisible: false };
    case "SHOW_IOS_INSTRUCTIONS":
      return { ...state, isIOSInstructionsVisible: true };
    case "HIDE_IOS_INSTRUCTIONS":
      return { ...state, isIOSInstructionsVisible: false };
    default:
      return state;
  }
}

export function usePWAInstall() {
  const [state, dispatch] = useReducer(pwaInstallReducer, initialState);

  useEffect(() => {
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone;
    dispatch({
      type: "SET_DEVICE_INFO",
      payload: { isIOS: isIOSDevice, isStandalone: isStandaloneMode },
    });

    if (isStandaloneMode) return;

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      dispatch({ type: "SET_PROMPT", payload: e });
      const hasDismissed = localStorage.getItem("pwa-install-prompt-dismissed");
      if (!hasDismissed) {
        setTimeout(() => dispatch({ type: "SHOW_PROMPT" }), 15000); // Show prompt after 15s
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleInstall = async () => {
    if (state.isIOS) {
      dispatch({ type: "HIDE_PROMPT" });
      dispatch({ type: "SHOW_IOS_INSTRUCTIONS" });
      return;
    }

    if (!state.prompt) return;
    await state.prompt.prompt();

    // Logic for tracking can be added here
    dispatch({ type: "SET_PROMPT", payload: null });
    dispatch({ type: "HIDE_PROMPT" });
    localStorage.setItem("pwa-install-prompt-dismissed", "true");
  };

  const handleDismiss = () => {
    dispatch({ type: "HIDE_PROMPT" });
    localStorage.setItem("pwa-install-prompt-dismissed", "true");
  };

  return {
    ...state,
    handleInstall,
    handleDismiss,
    setIOSInstructionsVisible: (visible: boolean) => {
      if (visible) dispatch({ type: "SHOW_IOS_INSTRUCTIONS" });
      else dispatch({ type: "HIDE_IOS_INSTRUCTIONS" });
    },
  };
}
