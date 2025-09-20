"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, X } from "lucide-react";

export default function PWAUpdatePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Check for service worker updates
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        // Listen for waiting service worker
        if (registration.waiting) {
          setShowPrompt(true);
        }

        // Listen for new service worker installing
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                setShowPrompt(true);
              }
            });
          }
        });
      });

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data && event.data.type === "SKIP_WAITING") {
          window.location.reload();
        }
      });
    }
  }, []);

  const handleUpdate = async () => {
    setIsUpdating(true);

    try {
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.ready;

        if (registration.waiting) {
          // Tell the waiting service worker to skip waiting
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
      }
    } catch (error) {
      console.error("Failed to update service worker:", error);
      setIsUpdating(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Track dismissal if analytics available
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "pwa_update_dismissed", {
        event_category: "PWA",
        event_label: "Update Dismissed",
      });
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 animate-slide-up">
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Dismiss update notification"
        disabled={isUpdating}
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
          <RefreshCw
            className={`w-5 h-5 text-white ${isUpdating ? "animate-spin" : ""}`}
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">
            App Update Available
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            A new version of FS University app is ready with improvements and
            bug fixes.
          </p>

          <div className="flex gap-2">
            <Button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
              size="sm"
            >
              {isUpdating ? (
                <>
                  <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 w-4 h-4" />
                  Update Now
                </>
              )}
            </Button>

            <Button
              onClick={handleDismiss}
              variant="outline"
              size="sm"
              disabled={isUpdating}
              className="px-3"
            >
              Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
