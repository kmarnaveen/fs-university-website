import React, {
  useState,
  useMemo,
  useCallback,
  ChangeEvent,
  useEffect,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PDFViewer } from "@/components/ui/pdf-viewer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Download,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  CheckCircle,
  X,
  FileText,
  Star,
  Shield,
  Clock,
  ThumbsUp,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Type definitions for FormField props
interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  icon: LucideIcon;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

// Reusable FormField Component with proper TypeScript types
const FormField: React.FC<FormFieldProps> = ({
  icon: Icon,
  label,
  ...props
}) => (
  <div className="relative">
    <label htmlFor={props.id} className="sr-only">
      {label}
    </label>
    <Icon
      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
      aria-hidden="true"
    />
    <Input
      className="pl-10 h-12 border-neutral-300 focus:border-[var(--fsu-crimson)] focus-visible:ring-[var(--fsu-crimson)]"
      {...props}
    />
  </div>
);

interface BrochureDownloadProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  course: string;
}

export const BrochureDownload: React.FC<BrochureDownloadProps> = ({
  className = "",
}) => {
  // Simplified state management
  const [modalState, setModalState] = useState<
    "closed" | "form" | "thankyou" | "pdf"
  >("closed");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "Not Selected",
  });

  // Chrome blocking detection states
  const [isBlocked, setIsBlocked] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [blockingDetected, setBlockingDetected] = useState(false);

  // PDF source URL
  const pdfUrl =
    "https://fsu.edu.in/wp-content/uploads/2025/03/FSU-Brochure-2025.pdf";

  // Memoize the courses array to prevent re-declaration on every render
  const courses = useMemo(
    () => [
      "B.Tech - Computer Science",
      "B.Tech - Mechanical Engineering",
      "B.Tech - Civil Engineering",
      "MBA - General",
      "BBA",
      "BCA",
      "LLB",
      "B.Pharma",
      "Other",
    ],
    []
  );

  // Chrome blocking detection effect
  useEffect(() => {
    if (modalState === "pdf") {
      // Detect Chrome blocking after a short delay
      const timer = setTimeout(() => {
        // Check if we're likely in Chrome and detect blocking patterns
        const isChrome =
          /Chrome/.test(navigator.userAgent) &&
          /Google Inc/.test(navigator.vendor);
        if (isChrome) {
          setBlockingDetected(true);
          // Show fallback after 3 seconds if user hasn't interacted
          setTimeout(() => {
            setShowFallback(true);
          }, 3000);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [modalState]);

  // Use useCallback for handler functions with proper typing
  const handleInputChange = useCallback(
    (field: keyof FormData, value: string): void => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  // PDF handling functions
  const handleDirectDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "FS-University-Brochure-2025.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [pdfUrl]);

  const handleOpenInNewTab = useCallback(() => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  }, [pdfUrl]);

  const handleRetryPDFViewer = useCallback(() => {
    setIsBlocked(false);
    setShowFallback(false);
    setBlockingDetected(false);
    // Force re-render of PDF viewer
    setModalState("thankyou");
    setTimeout(() => setModalState("pdf"), 100);
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
    console.log("Lead captured:", formData);

    setIsSubmitting(false);
    setModalState("thankyou");

    // Transition from "Thank You" to PDF viewer
    setTimeout(() => {
      setModalState("pdf");
    }, 2000);
  };

  // Enhanced form validation
  const isFormValid = useMemo(
    () =>
      formData.name.trim().length > 1 &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.phone.trim().length >= 10,
    [formData]
  );

  return (
    <div className={className}>
      {/* Main Download CTA */}
      <div className="relative group">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-xs font-bold">
                  FREE DOWNLOAD
                </Badge>
                <span className="text-xs text-[var(--fsu-gold)] font-medium">
                  • 2025 Edition
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Complete University Brochure
              </h3>
              <p className="text-sm text-neutral-200">
                Get detailed info on 50+ programs, fees, placements & campus
                life
              </p>
            </div>
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-bold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
              onClick={() => setModalState("form")}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Now
            </Button>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--fsu-gold)] font-medium">
                ✓ Instant Access • Latest Information
              </span>
              <span className="text-neutral-300">
                Downloaded by 10,000+ students
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Collection Form Modal */}
      <Dialog
        open={modalState === "form"}
        onOpenChange={(isOpen) => !isOpen && setModalState("closed")}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-[var(--fsu-crimson)]/10 rounded-full flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-[var(--fsu-crimson)]" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-[var(--fsu-crimson)]">
                  Download Brochure
                </DialogTitle>
                <DialogDescription className="text-sm text-neutral-600">
                  Get instant access to our complete university guide
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-xs text-neutral-600">100% Secure</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-xs text-neutral-600">Instant Access</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <Star className="w-4 h-4 text-yellow-600" />
              </div>
              <p className="text-xs text-neutral-600">Latest Info</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              id="name"
              name="name"
              type="text"
              placeholder="Full Name *"
              label="Full Name"
              icon={User}
              value={formData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("name", e.target.value)
              }
              required
            />
            <FormField
              id="email"
              name="email"
              type="email"
              placeholder="Email Address *"
              label="Email Address"
              icon={Mail}
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("email", e.target.value)
              }
              required
            />
            <FormField
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number *"
              label="Phone Number"
              icon={Phone}
              value={formData.phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("phone", e.target.value)
              }
              required
            />
            <FormField
              id="city"
              name="city"
              type="text"
              placeholder="City"
              label="City"
              icon={MapPin}
              value={formData.city}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange("city", e.target.value)
              }
            />

            <div className="relative">
              <label htmlFor="course" className="sr-only">
                Course of Interest
              </label>
              <GraduationCap
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
                aria-hidden="true"
              />
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  handleInputChange("course", e.target.value)
                }
                className="w-full pl-10 h-12 border border-neutral-300 rounded-md focus:border-[var(--fsu-crimson)] focus:outline-none focus:ring-1 focus:ring-[var(--fsu-crimson)] bg-white text-neutral-900"
              >
                <option value="Not Selected">Course of Interest</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-neutral-50 p-3 rounded-lg text-xs text-neutral-600 flex items-start gap-2">
              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
              <span>
                Your information is secure and will only be used to send you the
                brochure and relevant course updates.
              </span>
            </div>

            <Button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full h-12 bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)]/90 text-white font-semibold text-base transition-all"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  <span>Getting Brochure...</span>
                </>
              ) : (
                <>
                  <Download className="mr-2 w-5 h-5" />
                  <span>Get Brochure Now</span>
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* "Thank You" State Modal */}
      <Dialog open={modalState === "thankyou"}>
        <DialogContent className="sm:max-w-xs text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ThumbsUp className="w-8 h-8 text-green-600" />
          </div>
          <DialogTitle className="text-xl font-bold text-neutral-800">
            Thank You!
          </DialogTitle>
          <DialogDescription className="text-neutral-600">
            Your brochure is loading now. Enjoy!
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {/* PDF Viewer Modal with Fallback Options */}
      <Dialog
        open={modalState === "pdf"}
        onOpenChange={(isOpen) => !isOpen && setModalState("closed")}
      >
        <DialogContent className="max-w-4xl h-[90vh] p-0 flex flex-col">
          <DialogHeader className="sr-only">
            <DialogTitle>PDF Brochure Viewer</DialogTitle>
            <DialogDescription>
              Viewing FS University Brochure 2025 in PDF format
            </DialogDescription>
          </DialogHeader>

          <div className="absolute top-2 right-2 z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setModalState("closed")}
              className="bg-black/20 text-white hover:bg-black/50 hover:text-white"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Close PDF Viewer</span>
            </Button>
          </div>

          {/* Chrome Blocking Detection Banner */}
          {blockingDetected && showFallback && (
            <div className="absolute top-0 left-0 right-0 z-30 bg-amber-50 border-b border-amber-200 p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-amber-800">
                    PDF Viewer Blocked by Browser
                  </p>
                  <p className="text-xs text-amber-700">
                    Your browser may be blocking the PDF viewer. Try the options
                    below:
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRetryPDFViewer}
                    className="border-amber-300 text-amber-700 hover:bg-amber-100"
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Retry
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFallback(false)}
                    className="text-amber-700 hover:bg-amber-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Alternative PDF Access Methods */}
          {showFallback ? (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center max-w-md">
                <FileText className="h-16 w-16 text-[var(--fsu-crimson)] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Unable to Display PDF
                </h3>
                <p className="text-neutral-600 mb-6">
                  Your browser settings are preventing the PDF from loading.
                  Choose an alternative way to view the brochure:
                </p>

                <div className="space-y-3">
                  <Button
                    onClick={handleOpenInNewTab}
                    className="w-full bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)]/90 text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in New Tab
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleDirectDownload}
                    className="w-full border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF (2.5 MB)
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={handleRetryPDFViewer}
                    className="w-full text-neutral-600 hover:text-neutral-900"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try PDF Viewer Again
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
                  <p className="text-xs text-neutral-500">
                    💡 <strong>Tip:</strong> To enable PDF viewing in browser,
                    check your browser's PDF settings or disable ad blockers for
                    this site.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1">
              <PDFViewer
                src={pdfUrl}
                title="FS University Brochure 2025"
                description="Complete guide to programs, admissions, and campus life"
                onError={() => {
                  setIsBlocked(true);
                  setShowFallback(true);
                }}
                onLoad={() => {
                  setIsBlocked(false);
                  setShowFallback(false);
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
