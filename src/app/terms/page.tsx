import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield,
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle,
  Download,
  Mail
} from 'lucide-react';
import Link from 'next/link';

const TermsPage = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the FS University website (\"the Website\"), you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "FS University reserves the right to modify these terms at any time without prior notice."
      ]
    },
    {
      id: "use-license",
      title: "2. Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on FS University's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display (commercial or non-commercial)",
        "• Attempt to decompile or reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by FS University at any time."
      ]
    },
    {
      id: "disclaimer",
      title: "3. Disclaimer",
      content: [
        "The materials on FS University's website are provided on an 'as is' basis. FS University makes no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, FS University does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
        "Information provided on this website is for general guidance only and should not be considered as professional advice."
      ]
    },
    {
      id: "limitations",
      title: "4. Limitations",
      content: [
        "In no event shall FS University or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FS University's website, even if FS University or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
        "The maximum liability of FS University arising out of or in connection with the website shall not exceed the amount paid by you to FS University in the 12 months preceding the claim."
      ]
    },
    {
      id: "privacy",
      title: "5. Privacy Policy",
      content: [
        "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.",
        "By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.",
        "We are committed to protecting your personal data and respecting your privacy rights.",
        "For detailed information about our privacy practices, please review our separate Privacy Policy document."
      ]
    },
    {
      id: "user-accounts",
      title: "6. User Accounts",
      content: [
        "When you create an account with us, you must provide information that is accurate, complete, and current at all times.",
        "You are responsible for safeguarding the password and for all activities that occur under your account.",
        "You agree not to disclose your password to any third party and to notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
        "We reserve the right to terminate accounts that violate these terms or are inactive for extended periods.",
        "Students and faculty must use official university email addresses for account registration."
      ]
    },
    {
      id: "academic-integrity",
      title: "7. Academic Integrity",
      content: [
        "All users must adhere to the highest standards of academic integrity when using university resources and systems.",
        "Plagiarism, cheating, unauthorized collaboration, and other forms of academic dishonesty are strictly prohibited.",
        "Misuse of university technology resources, including but not limited to hacking, unauthorized access, or distribution of malicious software is prohibited.",
        "Violation of academic integrity policies may result in disciplinary action, including suspension or expulsion from the university.",
        "All academic work submitted through university systems must be original and properly attributed."
      ]
    },
    {
      id: "prohibited-uses",
      title: "8. Prohibited Uses",
      content: [
        "You may not use our service:",
        "• For any unlawful purpose or to solicit others to perform unlawful acts",
        "• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
        "• To infringe upon or violate our intellectual property rights or the intellectual property rights of others",
        "• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
        "• To submit false or misleading information",
        "• To upload or transmit viruses or any other type of malicious code",
        "• To collect or track personal information of others",
        "• To spam, phish, pharm, pretext, spider, crawl, or scrape",
        "• For any obscene or immoral purpose",
        "• To interfere with or circumvent security features of the service"
      ]
    },
    {
      id: "intellectual-property",
      title: "9. Intellectual Property",
      content: [
        "The service and its original content, features, and functionality are and will remain the exclusive property of FS University and its licensors.",
        "The service is protected by copyright, trademark, and other laws.",
        "Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.",
        "Course materials, lectures, and educational content remain the intellectual property of FS University and respective faculty members.",
        "Students are granted limited rights to use educational materials for personal study purposes only."
      ]
    },
    {
      id: "termination",
      title: "10. Termination",
      content: [
        "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the terms.",
        "If you wish to terminate your account, you may simply discontinue using the service.",
        "Upon termination, your right to use the service will cease immediately.",
        "All provisions of the terms which by their nature should survive termination shall survive termination.",
        "Data retention policies will apply as outlined in our Privacy Policy."
      ]
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      content: [
        "These terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions.",
        "Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.",
        "If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect.",
        "These terms constitute the entire agreement between us regarding our service and supersede and replace any prior agreements."
      ]
    },
    {
      id: "changes",
      title: "12. Changes to Terms",
      content: [
        "We reserve the right, at our sole discretion, to modify or replace these terms at any time.",
        "If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.",
        "What constitutes a material change will be determined at our sole discretion.",
        "By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms.",
        "It is your responsibility to review these terms periodically for changes."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:underline hover:text-[var(--fsu-crimson)]">Home</Link>
                <span>/</span>
                <span>Terms & Conditions</span>
              </nav>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Terms & Conditions
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Please read these terms and conditions carefully before using our website and services.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Important Notice */}
          <Card className="p-6 mb-8 border-l-4 border-l-[var(--fsu-crimson)] bg-red-50">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions constitute a legally binding agreement between you and 
                  FS University. By accessing or using our website, you acknowledge that you have read, 
                  understood, and agree to be bound by all terms outlined below.
                </p>
              </div>
            </div>
          </Card>

          {/* Table of Contents */}
          <Card className="p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[var(--fsu-crimson)] hover:underline text-sm py-1"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <Card key={section.id} id={section.id} className="p-8">
                <h2 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="p-8 mt-12 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="mb-6 opacity-90 leading-relaxed max-w-2xl mx-auto">
                If you have any questions about these Terms and Conditions, please contact our 
                legal department. We're here to help clarify any concerns you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100"
                >
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Legal Department
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                >
                  <Link href="/privacy">
                    <FileText className="w-4 h-4 mr-2" />
                    View Privacy Policy
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Download Section */}
          <Card className="p-6 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Download Terms & Conditions
                </h3>
                <p className="text-gray-600 text-sm">
                  Download a PDF copy of our complete Terms and Conditions for your records.
                </p>
              </div>
              <Button className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </Card>

          {/* Acceptance Acknowledgment */}
          <Card className="p-6 mt-8 border-l-4 border-l-green-500 bg-green-50">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Acknowledgment</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using our website and services, you acknowledge that you have read and 
                  understood these Terms and Conditions and agree to be bound by them. 
                  Your continued use of our services constitutes acceptance of any updates 
                  or modifications to these terms.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
