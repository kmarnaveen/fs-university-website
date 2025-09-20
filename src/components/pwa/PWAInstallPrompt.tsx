"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, X, Smartphone, Monitor } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Check if already installed (standalone mode)
    const isStandaloneMode =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes("android-app://");
    setIsStandalone(isStandaloneMode);

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Show prompt after 30 seconds if not already installed
      if (!isStandaloneMode) {
        setTimeout(() => {
          const hasSeenPrompt = localStorage.getItem(
            "pwa-install-prompt-dismissed"
          );
          if (!hasSeenPrompt) {
            setShowPrompt(true);
          }
        }, 30000);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Auto-show on scroll for mobile (after some engagement)
    let scrollCount = 0;
    const handleScroll = () => {
      scrollCount++;
      if (
        scrollCount > 5 &&
        !isStandaloneMode &&
        !localStorage.getItem("pwa-install-prompt-dismissed")
      ) {
        setShowPrompt(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    if (!isStandaloneMode) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
        // Track installation if analytics available
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "pwa_install", {
            event_category: "PWA",
            event_label: "Install Accepted",
          });
        }
      }
    } catch (error) {
      console.error("Install prompt failed:", error);
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
    localStorage.setItem("pwa-install-prompt-dismissed", "true");
  };

  const handleIOSInstall = () => {
    // Show iOS install instructions
    const instructions = `To install FS University app:
    
1. Tap the Share button (⬆️) at the bottom of Safari
2. Scroll down and tap "Add to Home Screen"
3. Tap "Add" to install the app
    
The app will appear on your home screen like a native app!`;

    alert(instructions);
    setShowPrompt(false);
    localStorage.setItem("pwa-install-prompt-dismissed", "true");
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-prompt-dismissed", "true");
    // Track dismissal
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "pwa_install_dismissed", {
        event_category: "PWA",
        event_label: "Install Dismissed",
      });
    }
  };

  // Don't show if already installed or user dismissed
  if (!showPrompt || isStandalone) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50 animate-slide-up">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close install prompt"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[var(--fsu-crimson)] to-red-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
          {isIOS ? (
            <Smartphone className="w-6 h-6 text-white" />
          ) : (
            <Download className="w-6 h-6 text-white" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 mb-2 text-lg">
            Install FS University App
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Get quick access to campus resources, offline viewing, push
            notifications, and a native app experience.
          </p>

          <div className="space-y-2">
            <Button
              onClick={isIOS ? handleIOSInstall : handleInstallClick}
              className="w-full bg-gradient-to-r from-[var(--fsu-crimson)] to-red-700 hover:from-red-700 hover:to-[var(--fsu-crimson)] text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isIOS ? (
                <>
                  <Smartphone className="mr-2 w-4 h-4" />
                  Show Install Steps
                </>
              ) : (
                <>
                  <Download className="mr-2 w-4 h-4" />
                  Install App
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Monitor className="w-3 h-3" />
                <span>Works offline</span>
              </div>
              <div className="flex items-center gap-1">
                <Smartphone className="w-3 h-3" />
                <span>Native feel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
        <p className="text-xs text-blue-800 leading-relaxed">
          <strong>💡 Benefits:</strong> Faster loading, offline access to
          content, push notifications for important updates, and home screen
          access.
        </p>
      </div>
    </div>
  );
}
