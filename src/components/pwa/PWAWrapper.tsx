"use client";

import PWAInstallPrompt from "./PWAInstallPrompt";
import PWAUpdatePrompt from "./PWAUpdatePrompt";
import OfflineIndicator from "./OfflineIndicator";

export default function PWAWrapper() {
  return (
    <>
      <PWAInstallPrompt />
      <PWAUpdatePrompt />
      <OfflineIndicator />
    </>
  );
}
