import React, { useState, useMemo, useCallback, ChangeEvent } from "react";
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

  // Use useCallback for handler functions with proper typing
  const handleInputChange = useCallback(
    (field: keyof FormData, value: string): void => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

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

      {/* PDF Viewer Modal */}
      <Dialog
        open={modalState === "pdf"}
        onOpenChange={(isOpen) => !isOpen && setModalState("closed")}
      >
        <DialogContent className="max-w-4xl h-[90vh] p-0 flex flex-col">
          <div className="absolute top-2 right-2 z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setModalState("closed")}
              className="bg-black/20 text-white hover:bg-black/50 hover:text-white"
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Close PDF Viewer</span>
            </Button>
          </div>
          <PDFViewer
            src="https://fsu.edu.in/wp-content/uploads/2025/03/FSU-Brochure-2025.pdf"
            title="FS University Brochure 2025"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
