"use client";

import { useState, useEffect } from "react";
import { WifiOff, Wifi } from "lucide-react";

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    // Set initial online status
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      setShowIndicator(true);
      // Hide the "back online" message after 3 seconds
      setTimeout(() => setShowIndicator(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowIndicator(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!showIndicator) return null;

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 shadow-lg transition-all duration-300 ${
        isOnline
          ? "bg-green-500 animate-slide-down"
          : "bg-red-500 animate-slide-down"
      }`}
      role="alert"
      aria-live="polite"
    >
      {isOnline ? (
        <>
          <Wifi className="w-4 h-4" />
          <span>Back online!</span>
        </>
      ) : (
        <>
          <WifiOff className="w-4 h-4" />
          <span>You're offline</span>
        </>
      )}
    </div>
  );
}
