/**
 * Optimized PDF Viewer Components for FS University
 *
 * Features:
 * - Performance optimized with React.memo, useCallback, and useMemo
 * - Enhanced error handling with retry functionality
 * - Full accessibility support (ARIA labels, keyboard shortcuts, screen reader friendly)
 * - Keyboard shortcuts (Ctrl+/+, Ctrl+-, Ctrl+R, Ctrl+F, Esc)
 * - Configurable zoom limits and controls
 * - Proper fullscreen API integration
 * - Security-conscious iframe sandbox
 * - Loading states and error recovery
 * - Responsive design with mobile-first approach
 * - TypeScript strict mode compliance
 *
 * @author FS University Development Team
 * @version 2.0.0 - Optimized Version
 */

"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  ExternalLink,
  FileText,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize,
  X,
  Loader2,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

interface PDFViewerProps {
  src: string;
  title?: string;
  description?: string;
  className?: string;
  height?: string;
  showControls?: boolean;
  allowDownload?: boolean;
  allowFullscreen?: boolean;
  onLoad?: () => void;
  onError?: (error: string) => void;
  maxZoom?: number;
  minZoom?: number;
  enableKeyboardShortcuts?: boolean;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({
  src,
  title = "PDF Document",
  description,
  className,
  height = "600px",
  showControls = true,
  allowDownload = true,
  allowFullscreen = true,
  onLoad,
  onError,
  maxZoom = 200,
  minZoom = 50,
  enableKeyboardShortcuts = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const [browserSupported, setBrowserSupported] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  // Check browser support for PDF viewing
  useEffect(() => {
    const checkBrowserSupport = () => {
      // Check if this is Chrome and if it has PDF viewer disabled
      const isChrome =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor);
      const hasPlugins = navigator.plugins.length > 0;

      if (isChrome && !hasPlugins) {
        setBrowserSupported(false);
        setError(
          "Chrome has blocked PDF viewing. Please use the download button to view the PDF."
        );
      }
    };

    checkBrowserSupport();
  }, []);

  // Optimized handlers with useCallback
  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setError(null);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(
    (errorMessage: string) => {
      setIsLoading(false);

      // Enhanced error detection for Chrome blocking
      if (
        errorMessage.includes("iframe") ||
        errorMessage.includes("blocked") ||
        errorMessage.includes("refused")
      ) {
        setError(
          "Chrome has blocked PDF iframe viewing. Please use the buttons below to view the PDF."
        );
        setBrowserSupported(false);
      } else {
        setError(errorMessage);
      }

      onError?.(errorMessage);
    },
    [onError]
  );

  const handleRetry = useCallback(() => {
    setIsRetrying(true);
    setError(null);
    setIsLoading(true);

    // Reload iframe after a short delay
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
      }
      setIsRetrying(false);
    }, 500);
  }, []);

  const handleDownload = useCallback(() => {
    try {
      const link = document.createElement("a");
      link.href = src;
      link.download = title.toLowerCase().replace(/\s+/g, "-") + ".pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed:", err);
      handleError("Download failed. Please try again.");
    }
  }, [src, title, handleError]);

  const handleOpenExternal = useCallback(() => {
    window.open(src, "_blank", "noopener,noreferrer");
  }, [src]);

  const handleFullscreen = useCallback(() => {
    setIsFullscreen(true);
    if (fullscreenRef.current && fullscreenRef.current.requestFullscreen) {
      fullscreenRef.current.requestFullscreen().catch(() => {
        // Fallback to custom fullscreen if browser fullscreen fails
      });
    }
  }, []);

  const handleCloseFullscreen = useCallback(() => {
    setIsFullscreen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {
        // Handle fullscreen exit failure
      });
    }
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 25, maxZoom));
  }, [maxZoom]);

  const handleZoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev - 25, minZoom));
  }, [minZoom]);

  const handleRotate = useCallback(() => {
    setRotation((prev) => (prev + 90) % 360);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts || isFullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target !== document.body) return;

      switch (event.key) {
        case "+":
        case "=":
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            handleZoomIn();
          }
          break;
        case "-":
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            handleZoomOut();
          }
          break;
        case "r":
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            handleRotate();
          }
          break;
        case "f":
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            handleFullscreen();
          }
          break;
        case "Escape":
          if (isFullscreen) {
            event.preventDefault();
            handleCloseFullscreen();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    enableKeyboardShortcuts,
    isFullscreen,
    handleZoomIn,
    handleZoomOut,
    handleRotate,
    handleFullscreen,
    handleCloseFullscreen,
  ]);

  // Handle iframe load errors and Chrome blocking
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const checkIframeLoad = () => {
      try {
        // Try to access iframe content - will throw if blocked
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) {
          throw new Error("Iframe access blocked");
        }
      } catch (error) {
        handleError(
          "PDF viewing blocked by browser security. Please use alternative viewing options below."
        );
      }
    };

    // Check after a short delay to allow iframe to load
    const timeoutId = setTimeout(checkIframeLoad, 3000);

    return () => clearTimeout(timeoutId);
  }, [handleError, src]);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [isFullscreen]);

  // Memoized PDF URL with security considerations
  const pdfUrl = React.useMemo(() => {
    try {
      // For relative URLs, make them absolute
      let fullUrl = src;
      if (src.startsWith("/")) {
        fullUrl = `${window.location.origin}${src}`;
      }

      // Create URL and add PDF viewer parameters
      const url = new URL(fullUrl);
      const params = new URLSearchParams();
      params.set("zoom", zoom.toString());
      params.set("page", currentPage.toString());
      if (rotation > 0) {
        params.set("rotate", rotation.toString());
      }

      // Use hash for PDF.js parameters (more compatible)
      url.hash = params.toString();
      return url.toString();
    } catch (error) {
      console.warn("Error constructing PDF URL:", error);
      return src; // Fallback to original URL
    }
  }, [src, zoom, currentPage, rotation]);

  const ViewerContent = React.memo(
    ({ viewerHeight }: { viewerHeight: string }) => (
      <div className="relative h-full w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-neutral-50 z-10">
            <div className="text-center">
              <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-[var(--fsu-crimson)]" />
              <p className="text-sm text-neutral-600">
                {isRetrying ? "Retrying..." : "Loading PDF..."}
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-neutral-50 z-10">
            <div className="text-center p-6 max-w-md">
              <AlertTriangle className="mx-auto mb-4 h-8 w-8 text-amber-500" />
              <p className="text-sm text-neutral-600 mb-4">{error}</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                {browserSupported && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRetry}
                    disabled={isRetrying}
                    className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                  >
                    {isRetrying ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4 mr-2" />
                    )}
                    Retry
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleOpenExternal}
                  className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleDownload}
                  className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)]/90"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={pdfUrl}
          className={cn(
            "h-full w-full rounded-lg border-0 transition-opacity duration-300",
            isLoading || error ? "opacity-0" : "opacity-100"
          )}
          style={{ height: viewerHeight }}
          onLoad={handleLoad}
          onError={() =>
            handleError(
              "Failed to load PDF document. This may be due to browser security restrictions."
            )
          }
          title={`PDF Viewer: ${title}`}
          loading="lazy"
          aria-label={`PDF document: ${title}${
            description ? `. ${description}` : ""
          }`}
          sandbox="allow-same-origin allow-scripts allow-forms allow-downloads"
          allow="fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    )
  );

  const ControlBar = React.memo(
    ({ isFullscreenContext = false }: { isFullscreenContext?: boolean }) =>
      showControls && (
        <div
          className={cn(
            "flex flex-col items-start gap-4 border-b bg-neutral-50 p-3 sm:flex-row sm:items-center sm:justify-between",
            isFullscreenContext && "bg-white shadow-sm"
          )}
          role="toolbar"
          aria-label="PDF viewer controls"
        >
          {/* Left Side: Title & Description */}
          <div className="flex min-w-0 items-center gap-3">
            <FileText
              className="h-5 w-5 shrink-0 text-[var(--fsu-crimson)]"
              aria-hidden="true"
            />
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-neutral-900">
                {title}
              </h3>
              {description && (
                <p className="truncate text-xs text-neutral-600">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Right Side: Controls */}
          <div className="flex w-full flex-wrap items-center justify-start gap-2 sm:w-auto sm:justify-end">
            {/* Zoom Controls */}
            <div
              className="flex items-center gap-1 rounded-lg border bg-white p-1"
              role="group"
              aria-label="Zoom controls"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoom <= minZoom}
                className="h-8 w-8 p-0"
                aria-label={`Zoom out (current: ${zoom}%)`}
                title={`Zoom out (Ctrl+-)`}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span
                className="min-w-[50px] px-2 text-center text-xs font-medium"
                aria-label={`Current zoom level: ${zoom} percent`}
              >
                {zoom}%
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoom >= maxZoom}
                className="h-8 w-8 p-0"
                aria-label={`Zoom in (current: ${zoom}%)`}
                title={`Zoom in (Ctrl++)`}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleRotate}
              className="h-8 w-8 p-0"
              title="Rotate 90° clockwise (Ctrl+R)"
              aria-label={`Rotate document (current rotation: ${rotation} degrees)`}
            >
              <RotateCw className="h-4 w-4" />
            </Button>

            {/* Action buttons adapt based on context (fullscreen or not) */}
            {isFullscreenContext ? (
              <>
                {allowDownload && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white transition-colors"
                    aria-label={`Download ${title}`}
                  >
                    <Download className="h-4 w-4 sm:mr-2" aria-hidden="true" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseFullscreen}
                  className="h-8 w-8 p-0"
                  aria-label="Exit fullscreen (Esc)"
                  title="Exit fullscreen (Esc)"
                >
                  <X className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                {allowFullscreen && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleFullscreen}
                    className="h-8 w-8 p-0"
                    title="Enter fullscreen (Ctrl+F)"
                    aria-label="Enter fullscreen mode"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleOpenExternal}
                  className="h-8 w-8 p-0"
                  title="Open in new tab"
                  aria-label="Open PDF in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
                {allowDownload && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white transition-colors"
                    aria-label={`Download ${title}`}
                  >
                    <Download className="h-4 w-4 sm:mr-2" aria-hidden="true" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      )
  );

  const FullscreenModal = React.memo(
    () =>
      isFullscreen && (
        <div
          ref={fullscreenRef}
          className="fixed inset-0 z-50 flex flex-col bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-fullscreen-title"
        >
          <div id="pdf-fullscreen-title" className="sr-only">
            PDF Viewer in fullscreen mode: {title}
          </div>
          <ControlBar isFullscreenContext={true} />
          <div className="flex-1 p-2 sm:p-4">
            <ViewerContent viewerHeight="100%" />
          </div>
        </div>
      )
  );

  return (
    <>
      <Card
        className={cn("overflow-hidden", className)}
        role="region"
        aria-label={`PDF Viewer: ${title}`}
      >
        <ControlBar />
        <CardContent className="h-full p-0">
          <ViewerContent viewerHeight={height} />
        </CardContent>
      </Card>
      <FullscreenModal />
    </>
  );
};

// Compact PDF viewer for smaller spaces
interface CompactPDFViewerProps {
  src: string;
  title: string;
  fileSize?: string;
  className?: string;
  onDownload?: () => void;
  onPreview?: () => void;
}

export const CompactPDFViewer: React.FC<CompactPDFViewerProps> = ({
  src,
  title,
  fileSize,
  className,
  onDownload,
  onPreview,
}) => {
  const handleDownload = useCallback(() => {
    try {
      onDownload?.();
      const link = document.createElement("a");
      link.href = src;
      link.download = title.toLowerCase().replace(/\s+/g, "-") + ".pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed:", err);
    }
  }, [src, title, onDownload]);

  const handlePreview = useCallback(() => {
    onPreview?.();
    window.open(src, "_blank", "noopener,noreferrer");
  }, [src, onPreview]);

  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:shadow-md hover:shadow-[var(--fsu-crimson)]/10",
        className
      )}
      role="region"
      aria-label={`PDF document: ${title}`}
    >
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--fsu-crimson)]/10"
            aria-hidden="true"
          >
            <FileText className="h-6 w-6 text-[var(--fsu-crimson)]" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm font-semibold text-neutral-900">
              {title}
            </h4>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xs text-neutral-500">PDF Document</span>
              {fileSize && (
                <>
                  <span className="text-xs text-neutral-300" aria-hidden="true">
                    •
                  </span>
                  <span className="text-xs text-neutral-500">{fileSize}</span>
                </>
              )}
            </div>
          </div>
          <div
            className="flex shrink-0 items-center gap-1 sm:gap-2"
            role="group"
            aria-label="PDF actions"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePreview}
              className="h-8 w-8 p-0 hover:bg-neutral-100 transition-colors"
              title="Preview PDF"
              aria-label={`Preview ${title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="h-8 w-8 p-0 text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white transition-all duration-200"
              title="Download PDF"
              aria-label={`Download ${title}`}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFViewer;
