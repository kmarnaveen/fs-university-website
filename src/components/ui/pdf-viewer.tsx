"use client";

import React, { useState } from "react";
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
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  const handleLoad = () => setIsLoading(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = title.toLowerCase().replace(/\s+/g, "-") + ".pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenExternal = () => window.open(src, "_blank");
  const handleFullscreen = () => setIsFullscreen(true);
  const handleCloseFullscreen = () => setIsFullscreen(false);
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const pdfUrl = `${src}#zoom=${zoom}&page=${currentPage}&rotate=${rotation}`;

  const ViewerContent = ({ viewerHeight }: { viewerHeight: string }) => (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-neutral-50">
          <div className="text-center">
            <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-[var(--fsu-crimson)]" />
            <p className="text-sm text-neutral-600">Loading PDF...</p>
          </div>
        </div>
      )}
      <iframe
        src={pdfUrl}
        className={cn(
          "h-full w-full rounded-lg border-0 transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        style={{ height: viewerHeight }}
        onLoad={handleLoad}
        title={title}
        loading="lazy"
      />
    </div>
  );

  const ControlBar = ({ isFullscreenContext = false }) =>
    showControls && (
      <div
        className={cn(
          "flex flex-col items-start gap-4 border-b bg-neutral-50 p-3 sm:flex-row sm:items-center sm:justify-between",
          isFullscreenContext && "bg-white"
        )}
      >
        {/* Left Side: Title & Description */}
        <div className="flex min-w-0 items-center gap-3">
          <FileText className="h-5 w-5 shrink-0 text-[var(--fsu-crimson)]" />
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-neutral-900">
              {title}
            </h3>
            {description && (
              <p className="truncate text-xs text-neutral-600">{description}</p>
            )}
          </div>
        </div>

        {/* Right Side: Controls */}
        <div className="flex w-full flex-wrap items-center justify-start gap-2 sm:w-auto sm:justify-end">
          {/* Zoom Controls */}
          <div className="flex items-center gap-1 rounded-lg border bg-white p-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomOut}
              disabled={zoom <= 50}
              className="h-8 w-8 p-0"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="min-w-[50px] px-2 text-center text-xs font-medium">
              {zoom}%
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomIn}
              disabled={zoom >= 200}
              className="h-8 w-8 p-0"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleRotate}
            className="h-8 w-8 p-0"
            title="Rotate"
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
                  className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
                >
                  <Download className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseFullscreen}
                className="h-8 w-8 p-0"
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
                  title="Fullscreen"
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
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
              {allowDownload && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                >
                  <Download className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    );

  const FullscreenModal = () =>
    isFullscreen && (
      <div className="fixed inset-0 z-50 flex flex-col bg-black/90">
        <ControlBar isFullscreenContext={true} />
        <div className="flex-1 p-2 sm:p-4">
          <ViewerContent viewerHeight="100%" />
        </div>
      </div>
    );

  return (
    <>
      <Card className={cn("overflow-hidden", className)}>
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
}

export const CompactPDFViewer: React.FC<CompactPDFViewerProps> = ({
  src,
  title,
  fileSize,
  className,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = title.toLowerCase().replace(/\s+/g, "-") + ".pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => window.open(src, "_blank");

  return (
    <Card className={cn("transition-shadow hover:shadow-md", className)}>
      <CardContent className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--fsu-crimson)]/10">
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
                  <span className="text-xs text-neutral-300">•</span>
                  <span className="text-xs text-neutral-500">{fileSize}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePreview}
              className="h-8 w-8 p-0"
              title="Preview"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="h-8 w-8 p-0 text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              title="Download"
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
