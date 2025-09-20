/**
 * PDF Viewer Usage Examples
 * Demonstrates how to use the optimized PDF viewer components
 */

import React from "react";
import { PDFViewer, CompactPDFViewer } from "./pdf-viewer";

export const PDFViewerExamples = () => {
  // Example callback functions
  const handlePDFLoad = () => {
    console.log("PDF loaded successfully");
  };

  const handlePDFError = (error: string) => {
    console.error("PDF error:", error);
  };

  const handleDownload = () => {
    console.log("PDF download initiated");
  };

  const handlePreview = () => {
    console.log("PDF preview opened");
  };

  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Full PDF Viewer</h2>
        <PDFViewer
          src="/documents/sample-document.pdf"
          title="University Prospectus 2024"
          description="Complete guide to our academic programs and campus life"
          height="500px"
          showControls={true}
          allowDownload={true}
          allowFullscreen={true}
          enableKeyboardShortcuts={true}
          maxZoom={300}
          minZoom={25}
          onLoad={handlePDFLoad}
          onError={handlePDFError}
          className="border-2 border-[var(--fsu-crimson)]/20"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Compact PDF Viewers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CompactPDFViewer
            src="/documents/admission-form.pdf"
            title="Admission Application Form"
            fileSize="2.5 MB"
            onDownload={handleDownload}
            onPreview={handlePreview}
          />

          <CompactPDFViewer
            src="/documents/academic-calendar.pdf"
            title="Academic Calendar 2024-25"
            fileSize="1.8 MB"
            onDownload={handleDownload}
            onPreview={handlePreview}
          />

          <CompactPDFViewer
            src="/documents/scholarship-info.pdf"
            title="Scholarship Information & Guidelines"
            fileSize="3.2 MB"
            onDownload={handleDownload}
            onPreview={handlePreview}
          />

          <CompactPDFViewer
            src="/documents/campus-map.pdf"
            title="Campus Map & Facilities Guide"
            fileSize="4.1 MB"
            onDownload={handleDownload}
            onPreview={handlePreview}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Minimal Configuration</h2>
        <PDFViewer
          src="/documents/quick-guide.pdf"
          title="Quick Start Guide"
          height="400px"
          showControls={false}
          allowDownload={false}
          allowFullscreen={false}
          enableKeyboardShortcuts={false}
          className="shadow-lg"
        />
      </div>

      <div className="bg-neutral-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">
          Keyboard Shortcuts (when enabled)
        </h3>
        <ul className="text-sm space-y-1">
          <li>
            <code>Ctrl/Cmd + +</code> - Zoom in
          </li>
          <li>
            <code>Ctrl/Cmd + -</code> - Zoom out
          </li>
          <li>
            <code>Ctrl/Cmd + R</code> - Rotate document
          </li>
          <li>
            <code>Ctrl/Cmd + F</code> - Enter fullscreen
          </li>
          <li>
            <code>Esc</code> - Exit fullscreen
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PDFViewerExamples;
