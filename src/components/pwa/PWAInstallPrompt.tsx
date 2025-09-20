"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { usePWAInstall } from "@/hooks/use-pwa-install";
import {
  Download,
  X,
  Smartphone,
  Monitor,
  Share,
  PlusSquare,
} from "lucide-react";

const IOSInstallInstructions = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center text-[var(--fsu-crimson)]">
          Install on iOS
        </DialogTitle>
        <DialogDescription className="text-center text-neutral-600">
          Follow these simple steps to add the FS University app to your home
          screen.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4 space-y-4 text-center">
        <p>
          1. Tap the <Share className="inline h-5 w-5 mx-1" /> button in your
          Safari toolbar.
        </p>
        <p>
          2. Scroll down and tap on{" "}
          <PlusSquare className="inline h-5 w-5 mx-1" /> "Add to Home Screen".
        </p>
        <p>3. Confirm by tapping "Add" in the top right corner.</p>
      </div>
    </DialogContent>
  </Dialog>
);

export default function PWAInstallPrompt() {
  const {
    isPromptVisible,
    isIOS,
    handleInstall,
    handleDismiss,
    isIOSInstructionsVisible,
    setIOSInstructionsVisible,
  } = usePWAInstall();

  if (!isPromptVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up rounded-xl border border-gray-200 bg-white p-5 shadow-2xl md:left-auto md:right-4 md:w-96">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
          aria-label="Close install prompt"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-4 pr-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--fsu-crimson)] to-red-700 shadow-lg">
            <Download className="h-6 w-6 text-white" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">
              Install FS University App
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-gray-600">
              Get a faster, native app experience with offline access and
              notifications.
            </p>

            <div className="space-y-4">
              <Button
                onClick={handleInstall}
                className="w-full bg-gradient-to-r from-[var(--fsu-crimson)] to-red-700 text-white shadow-lg transition-all duration-200 hover:shadow-xl h-11 font-medium"
              >
                {isIOS ? (
                  <>
                    <Smartphone className="mr-2 h-4 w-4" /> Show Install Steps
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" /> Install App
                  </>
                )}
              </Button>
              <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Monitor className="h-3 w-3" />
                  <span>Works Offline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="h-3 w-3" />
                  <span>Native Feel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <IOSInstallInstructions
        open={isIOSInstructionsVisible}
        onOpenChange={setIOSInstructionsVisible}
      />
    </>
  );
}
