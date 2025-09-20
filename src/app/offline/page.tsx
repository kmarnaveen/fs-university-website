"use client";

import { WifiOff, RefreshCw, Home, FileText, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center px-6 py-12 max-w-md w-full">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <WifiOff className="w-12 h-12 text-gray-500" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          You're Offline
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          It looks like you've lost your internet connection. Some pages may
          still be available offline, or you can try reconnecting.
        </p>

        <div className="space-y-4 mb-8">
          <Button
            onClick={() => window.location.reload()}
            className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)]/90 text-white shadow-lg"
          >
            <RefreshCw className="mr-2 w-5 h-5" />
            Try Again
          </Button>

          <Link href="/" className="block">
            <Button
              variant="outline"
              className="w-full border-2 hover:bg-gray-50"
            >
              <Home className="mr-2 w-5 h-5" />
              Go to Homepage
            </Button>
          </Link>
        </div>

        <div className="space-y-3 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Available Offline:
          </h2>

          <div className="grid grid-cols-1 gap-2">
            <Link href="/programs" className="block">
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <FileText className="mr-3 w-4 h-4" />
                Academic Programs
              </Button>
            </Link>

            <Link href="/about" className="block">
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <FileText className="mr-3 w-4 h-4" />
                About University
              </Button>
            </Link>

            <Link href="/contact" className="block">
              <Button
                variant="ghost"
                className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <Phone className="mr-3 w-4 h-4" />
                Contact Information
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>💡 Tip:</strong> When you're back online, previously visited
            pages will load faster thanks to our progressive web app technology.
          </p>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          <p>FS University Progressive Web App</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
