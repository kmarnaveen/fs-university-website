import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield,
  Lock,
  Eye,
  Clock,
  AlertTriangle,
  CheckCircle,
  Download,
  Mail,
  Database,
  UserCheck,
  Settings,
  Globe
} from 'lucide-react';
import Link from 'next/link';

const PrivacyPage = () => {
  const lastUpdated = "January 15, 2024";

  const dataTypes = [
    {
      icon: UserCheck,
      title: "Personal Information",
      description: "Name, email address, phone number, date of birth, and address",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Database,
      title: "Academic Records",
      description: "Educational history, grades, transcripts, and course enrollment",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Settings,
      title: "Technical Data",
      description: "IP address, browser type, device information, and usage analytics",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Globe,
      title: "Communication Data",
      description: "Messages, feedback, support requests, and correspondence",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "FS University (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.",
        "This policy applies to all information collected by FS University through our website, applications, and any related services, sales, marketing, or events.",
        "Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.",
        "We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the \"Last updated\" date of this Privacy Policy."
      ]
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      content: [
        "We may collect information about you in a variety of ways. The information we may collect on the Site includes:",
        "Personal Data: When you register for an account, apply for admission, or interact with our services, we may collect personally identifiable information such as your name, email address, phone number, postal address, and demographic information.",
        "Academic Information: For students and faculty, we collect educational records, grades, course information, and other academic-related data necessary for educational services.",
        "Financial Information: When processing payments for tuition, fees, or other services, we may collect financial information such as credit card numbers and billing addresses through secure payment processors.",
        "Technical Data: We automatically collect certain information when you visit, use, or navigate the Site, including your IP address, browser type, operating system, access times, and pages viewed.",
        "Cookies and Tracking Technologies: We may use cookies, web beacons, and other tracking technologies to collect information about your browsing activities."
      ]
    },
    {
      id: "information-use",
      title: "3. How We Use Your Information",
      content: [
        "We use the information we collect or receive to:",
        "• Provide educational services and manage your academic experience",
        "• Process applications, registrations, and enrollment",
        "• Communicate with you about your account, courses, and university services",
        "• Process payments and manage financial accounts",
        "• Improve our website, services, and user experience",
        "• Conduct research and analytics to enhance educational programs",
        "• Comply with legal obligations and university policies",
        "• Send administrative information and important updates",
        "• Respond to inquiries and provide customer support",
        "• Detect, prevent, and address technical issues and security breaches"
      ]
    },
    {
      id: "information-sharing",
      title: "4. Information Sharing and Disclosure",
      content: [
        "We may share your information in the following situations:",
        "Educational Partners: We may share information with accredited educational institutions, certification bodies, and academic partners for legitimate educational purposes.",
        "Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and technical support.",
        "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
        "Academic Records: We may share academic information with employers, other educational institutions, or credentialing organizations upon your request or with your consent.",
        "Emergency Situations: We may share information when we believe it is necessary to protect the safety of students, faculty, staff, or the public.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
      ]
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, disclosure, alteration, and destruction.",
        "These measures include:",
        "• Encryption of sensitive data in transit and at rest",
        "• Regular security assessments and penetration testing",
        "• Access controls and authentication mechanisms",
        "• Employee training on data protection and privacy",
        "• Secure data centers and infrastructure",
        "• Regular backup and disaster recovery procedures",
        "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security."
      ]
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      content: [
        "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
        "Academic Records: Student academic records are retained in accordance with educational regulations and accreditation requirements, typically for a minimum of 7 years after graduation.",
        "Financial Records: Financial information is retained for the period required by applicable tax and accounting regulations.",
        "Account Information: Personal account information is retained while your account is active and for a reasonable period thereafter for historical and legal purposes.",
        "Marketing Data: Information collected for marketing purposes is retained until you opt-out or request deletion, or for a maximum of 3 years.",
        "When information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies."
      ]
    },
    {
      id: "your-rights",
      title: "7. Your Privacy Rights",
      content: [
        "Depending on your location and applicable laws, you may have the following rights regarding your personal information:",
        "Access: You have the right to request copies of your personal information held by us.",
        "Rectification: You have the right to request correction of any information you believe is inaccurate or incomplete.",
        "Erasure: You have the right to request deletion of your personal information under certain circumstances.",
        "Restriction: You have the right to request restriction of processing your personal information under certain circumstances.",
        "Data Portability: You have the right to request transfer of your information to another organization under certain circumstances.",
        "Objection: You have the right to object to processing of your personal information under certain circumstances.",
        "To exercise these rights, please contact our Data Protection Officer using the contact information provided below."
      ]
    },
    {
      id: "cookies",
      title: "8. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our website.",
        "Essential Cookies: These are necessary for the website to function properly and cannot be disabled.",
        "Analytics Cookies: These help us understand how visitors interact with our website by collecting and reporting information anonymously.",
        "Functional Cookies: These enable enhanced functionality and personalization, such as videos and live chats.",
        "Marketing Cookies: These are used to track visitors across websites to display relevant advertisements.",
        "You can control cookie settings through your browser preferences. However, disabling certain cookies may limit your ability to use some features of our website.",
        "For more information about cookies and how to manage them, please visit our Cookie Policy."
      ]
    },
    {
      id: "third-party-services",
      title: "9. Third-Party Services",
      content: [
        "Our website may contain links to third-party websites, applications, or services that are not owned or controlled by FS University.",
        "We are not responsible for the privacy practices or content of these third-party services. We encourage you to review the privacy policies of any third-party services you access.",
        "Third-party services we may use include:",
        "• Payment processors for secure transaction handling",
        "• Cloud storage providers for data backup and accessibility",
        "• Email service providers for communication",
        "• Analytics services for website performance monitoring",
        "• Social media platforms for engagement and communication",
        "These services have their own privacy policies, and your interactions with them are governed by their respective terms and policies."
      ]
    },
    {
      id: "international-transfers",
      title: "10. International Data Transfers",
      content: [
        "FS University is based in India, and your information may be transferred to and processed in India or other countries where we or our service providers operate.",
        "When we transfer personal information outside of India, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.",
        "These safeguards may include:",
        "• Standard contractual clauses approved by relevant authorities",
        "• Adequacy decisions recognizing equivalent levels of protection",
        "• Certification schemes and codes of conduct",
        "• Binding corporate rules for intra-group transfers",
        "If you are located in the European Union or other regions with data protection laws, you may have additional rights regarding international transfers of your personal information."
      ]
    },
    {
      id: "childrens-privacy",
      title: "11. Children's Privacy",
      content: [
        "Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children under 13.",
        "If we learn that we have collected personal information from a child under 13 without parental consent, we will delete that information as quickly as possible.",
        "If you believe that we have collected information from a child under 13, please contact us immediately.",
        "For users between 13 and 18 years of age, we may require parental or guardian consent for certain activities or information collection.",
        "Parents and guardians have the right to review, modify, or delete their child's personal information by contacting us directly."
      ]
    },
    {
      id: "updates",
      title: "12. Policy Updates",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.",
        "When we make material changes to this Privacy Policy, we will:",
        "• Post the updated policy on our website with a new \"Last Updated\" date",
        "• Notify you via email or through our website",
        "• Provide at least 30 days' notice for significant changes",
        "• Request your consent where required by applicable law",
        "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
        "Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy."
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
                <span>Privacy Policy</span>
              </nav>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Privacy Policy
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
          <Card className="p-6 mb-8 border-l-4 border-l-[var(--fsu-crimson)] bg-blue-50">
            <div className="flex items-start space-x-3">
              <Lock className="w-6 h-6 text-[var(--fsu-crimson)] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Privacy Matters</h3>
                <p className="text-gray-700 leading-relaxed">
                  FS University is committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy describes how we collect, use, share, and protect your information when you use our services.
                </p>
              </div>
            </div>
          </Card>

          {/* Data Types We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--fsu-crimson)] mb-6 text-center">
              Types of Information We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

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

          {/* Privacy Policy Sections */}
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

          {/* Your Rights Section */}
          <Card className="p-8 mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-l-green-500">
            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Know Your Rights</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                You have important rights regarding your personal information. You can access, correct, 
                delete, or transfer your data. Contact our Data Protection Officer to exercise your rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white">
                  <UserCheck className="w-4 h-4 mr-2" />
                  Manage Your Data
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
                >
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact DPO
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="p-8 mt-8 bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Privacy Questions?</h3>
              <p className="mb-6 opacity-90 leading-relaxed max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact our Data Protection Officer. We're here to help protect your privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100"
                >
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Privacy Team
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)]"
                >
                  <Link href="/terms">
                    View Terms & Conditions
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
                  Download Privacy Policy
                </h3>
                <p className="text-gray-600 text-sm">
                  Download a PDF copy of our complete Privacy Policy for your records.
                </p>
              </div>
              <Button className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </Card>

          {/* Commitment Statement */}
          <Card className="p-6 mt-8 border-l-4 border-l-green-500 bg-green-50">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  FS University is committed to maintaining the highest standards of data protection 
                  and privacy. We continuously review and update our practices to ensure your 
                  information remains secure and your privacy rights are respected.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
