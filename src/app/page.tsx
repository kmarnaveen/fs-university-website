"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/ui/stats-card";
import { NewsCard } from "@/components/ui/news-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CompanyLogo } from "@/components/ui/company-logo";
import { ImageGalleryModal } from "@/components/ui/image-gallery-modal";
import { AccreditationMarquee } from "@/components/ui/accreditation-marquee";
import { BrochureDownload } from "@/components/ui/brochure-download";
import ProgramCard from "@/components/programs/ProgramCard";
import ApplyCTA from "@/components/fsu-specific/ApplyCTA";
import {
  GraduationCap,
  Users,
  Trophy,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Award,
  Play,
  Calendar,
  Clock,
  FileText,
  Bell,
  Download,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("undergraduate");
  const [noticeTab, setNoticeTab] = useState("students");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  // Campus life images for the gallery
  const campusImages = [
    {
      src: "https://fsu.edu.in/wp-content/uploads/2025/04/International-Seminar-on-Mental-Health-and-Emotional-Wellbeing.jpg",
      alt: "International Seminar on Mental Health and Emotional Wellbeing",
    },
    {
      src: "https://fsu.edu.in/wp-content/uploads/2025/04/FS-University-Event.jpg",
      alt: "FS University Event",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQFKUB66BRkzTA/feedshare-shrink_2048_1536/B56ZUc1HvrGsAo-/0/1739945456203?e=1761177600&v=beta&t=1E-GSwAHkn3zgHMBfQhxgeze1ASQGwSVRn5OCboDA1E",
      alt: "Campus Background",
    },
    {
      src: "https://fsu.edu.in/wp-content/uploads/2024/12/Academic-Facilities.jpg",
      alt: "Academic Facilities",
    },
    {
      src: "https://fsu.edu.in/wp-content/uploads/2024/12/FSU.jpg",
      alt: "Campus Life",
    },
    {
      src: "https://fsu.edu.in/wp-content/uploads/2024/12/Gymnasium.jpg",
      alt: "Gymnasium",
    },
    {
      src: "https://fsu.edu.in/wp-content/uploads/2025/04/IMGL9732.jpg",
      alt: "Student Interaction",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQFSUzstKiqctQ/feedshare-shrink_2048_1536/B56ZUc1HuUGUAw-/0/1739945448488?e=1761177600&v=beta&t=5ft_zdecSOl-W5Gq2wL62lv8fXW8pM8-jDiL2xfu3aQ",
      alt: "Campus Events",
    },
  ];

  const openGallery = (index: number) => {
    setGalleryInitialIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const stats = [
    { number: "10,000+", label: "Students", description: "Active learners" },
    { number: "500+", label: "Faculty", description: "Expert educators" },
    { number: "95%", label: "Placement Rate", description: "Career success" },
    {
      number: "200+",
      label: "Global Partners",
      description: "Industry connections",
    },
  ];

  const diplomaPrograms = [
    {
      title: "Diploma in Pharmacy",
      description:
        "Comprehensive pharmaceutical education covering drug preparation, dispensing, and patient care with industry internships",
      duration: "2 Years",
      level: "D.Pharm",
      fees: "₹1,20,000/year",
      category: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
      school: "School of Pharmacy",
      featured: true,
    },
    {
      title: "Diploma in Elementary Education",
      description:
        "Teacher training program focused on primary education methods, child psychology, and modern pedagogical techniques",
      duration: "2 Years",
      level: "D.El.Ed",
      fees: "₹60,000/year",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      school: "School of Education",
      featured: false,
    },
  ];

  const undergraduatePrograms = [
    {
      title: "Computer Science Engineering",
      description:
        "Leading-edge curriculum in AI, Machine Learning, Data Science, and Software Development with industry collaborations",
      duration: "4 Years",
      level: "B.Tech",
      fees: "₹2,50,000/year",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: true,
    },
    {
      title: "Mechanical Engineering",
      description:
        "Comprehensive mechanical engineering with focus on design, manufacturing, robotics, and sustainable technologies",
      duration: "4 Years",
      level: "B.Tech",
      fees: "₹2,40,000/year",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: false,
    },
    {
      title: "Civil Engineering",
      description:
        "Infrastructure development, smart cities, earthquake engineering, and sustainable construction techniques",
      duration: "4 Years",
      level: "B.Tech",
      fees: "₹2,30,000/year",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: false,
    },
    {
      title: "Electronics & Communication Engineering",
      description:
        "Advanced electronics, 5G communication, IoT, embedded systems, and semiconductor technology",
      duration: "4 Years",
      level: "B.Tech",
      fees: "₹2,45,000/year",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: false,
    },
    {
      title: "Bachelor of Science - Physics, Chemistry, Mathematics",
      description:
        "Integrated science education covering advanced physics, chemistry, mathematics with research opportunities",
      duration: "3 Years",
      level: "B.Sc",
      fees: "₹80,000/year",
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      school: "School of Basic Science",
      featured: false,
    },
    {
      title: "Bachelor of Science - Biology",
      description:
        "Life sciences, biotechnology, genetics, microbiology, and environmental biology with laboratory experience",
      duration: "3 Years",
      level: "B.Sc",
      fees: "₹90,000/year",
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      school: "School of Basic Science",
      featured: false,
    },
    {
      title: "Bachelor of Science - Agriculture",
      description:
        "Modern agricultural practices, sustainable farming, agribusiness, and food technology",
      duration: "4 Years",
      level: "B.Sc",
      fees: "₹1,20,000/year",
      category: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      school: "School of Agriculture",
      featured: true,
    },
    {
      title: "Bachelor of Science - Nursing",
      description:
        "Professional nursing education with clinical training, patient care, and healthcare management",
      duration: "4 Years",
      level: "B.Sc",
      fees: "₹1,50,000/year",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      school: "School of Nursing",
      featured: false,
    },
    {
      title: "Bachelor of Commerce",
      description:
        "Comprehensive business education with accounting, finance, taxation, and digital commerce",
      duration: "3 Years",
      level: "B.Com",
      fees: "₹70,000/year",
      category: "Commerce",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
      school: "School of Commerce & Finance",
      featured: false,
    },
    {
      title: "Bachelor of Business Administration",
      description:
        "Management studies with leadership, entrepreneurship, digital marketing, and startup incubation",
      duration: "3 Years",
      level: "BBA",
      fees: "₹1,00,000/year",
      category: "Management",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      school: "School of Business Management & Entrepreneurship",
      featured: false,
    },
    {
      title: "Bachelor of Computer Applications",
      description:
        "Computer programming, software development, mobile app development, and emerging technologies",
      duration: "3 Years",
      level: "BCA",
      fees: "₹90,000/year",
      category: "Computer Science",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: false,
    },
    {
      title: "Bachelor of Arts",
      description:
        "Liberal arts education with literature, history, psychology, sociology, and cultural studies",
      duration: "3 Years",
      level: "B.A",
      fees: "₹60,000/year",
      category: "Arts",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      school: "School of Art & Humanities",
      featured: false,
    },
    {
      title: "Bachelor of Laws",
      description:
        "Comprehensive legal education with constitutional, criminal, corporate, and cyber law",
      duration: "3 Years",
      level: "LL.B",
      fees: "₹1,20,000/year",
      category: "Law",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      school: "School of Law",
      featured: false,
    },
    {
      title: "Integrated Bachelor of Arts & Laws",
      description:
        "Combined humanities and legal studies with international law, human rights, and legal practice",
      duration: "5 Years",
      level: "B.A. LL.B",
      fees: "₹1,30,000/year",
      category: "Law",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      school: "School of Law",
      featured: false,
    },
    {
      title: "Bachelor of Education",
      description:
        "Teacher training program with modern pedagogical methods, educational technology, and classroom management",
      duration: "2 Years",
      level: "B.Ed",
      fees: "₹80,000/year",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      school: "School of Education",
      featured: false,
    },
    {
      title: "Bachelor of Elementary Education",
      description:
        "Specialized training for primary education with child development, learning disabilities, and inclusive education",
      duration: "4 Years",
      level: "B.El.Ed",
      fees: "₹75,000/year",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      school: "School of Education",
      featured: false,
    },
  ];

  const postgraduatePrograms = [
    {
      title: "Master of Business Administration",
      description:
        "Comprehensive MBA program with specializations in finance, marketing, HR, operations, and digital business",
      duration: "2 Years",
      level: "MBA",
      fees: "₹3,50,000/year",
      category: "Management",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
      school: "School of Business Management & Entrepreneurship",
      featured: true,
    },
    {
      title: "Master of Technology",
      description:
        "Advanced engineering studies with specialized research in various engineering disciplines",
      duration: "2 Years",
      level: "M.Tech",
      fees: "₹2,80,000/year",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: true,
    },
    {
      title: "Master of Science - Physics",
      description:
        "Advanced physics with quantum mechanics, nuclear physics, astrophysics, and research opportunities",
      duration: "2 Years",
      level: "M.Sc",
      fees: "₹1,50,000/year",
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      school: "School of Basic Science",
      featured: false,
    },
    {
      title: "Master of Science - Chemistry",
      description:
        "Advanced chemistry with pharmaceutical chemistry, materials science, and industrial applications",
      duration: "2 Years",
      level: "M.Sc",
      fees: "₹1,55,000/year",
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=300&fit=crop",
      school: "School of Basic Science",
      featured: false,
    },
    {
      title: "Master of Science - Mathematics",
      description:
        "Advanced mathematical concepts with applications in data science, finance, and research",
      duration: "2 Years",
      level: "M.Sc",
      fees: "₹1,40,000/year",
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      school: "School of Basic Science",
      featured: false,
    },
    {
      title: "Master of Science - Agriculture",
      description:
        "Advanced agricultural research, precision farming, agribusiness, and sustainable agriculture",
      duration: "2 Years",
      level: "M.Sc",
      fees: "₹1,80,000/year",
      category: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      school: "School of Agriculture",
      featured: true,
    },
    {
      title: "Master of Arts",
      description:
        "Advanced humanities studies with literature, history, psychology, and cultural studies",
      duration: "2 Years",
      level: "M.A",
      fees: "₹1,20,000/year",
      category: "Arts",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      school: "School of Art & Humanities",
      featured: false,
    },
    {
      title: "Master of Laws",
      description:
        "Advanced legal studies with corporate law, international law, intellectual property, and cyber law",
      duration: "1 Year",
      level: "LL.M",
      fees: "₹2,00,000/year",
      category: "Law",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      school: "School of Law",
      featured: false,
    },
    {
      title: "Master of Computer Applications",
      description:
        "Advanced programming, software architecture, mobile app development, and emerging technologies",
      duration: "2 Years",
      level: "MCA",
      fees: "₹2,20,000/year",
      category: "Computer Science",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: false,
    },
    {
      title: "Master of Education",
      description:
        "Advanced educational methodology, curriculum development, educational leadership, and technology integration",
      duration: "2 Years",
      level: "M.Ed",
      fees: "₹1,30,000/year",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      school: "School of Education",
      featured: false,
    },
  ];

  const doctoralPrograms = [
    {
      title: "Doctor of Philosophy - Engineering",
      description:
        "Advanced research in Computer Science, Mechanical, Civil, Electronics & Communication Engineering and emerging technologies",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,50,000/year",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      school: "School of Engineering & Technology",
      featured: true,
    },
    {
      title: "Doctor of Philosophy - Science",
      description:
        "Research-focused doctoral studies in Physics, Chemistry, Mathematics, Biology, and interdisciplinary sciences",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,40,000/year",
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      school: "School of Basic Science",
      featured: true,
    },
    {
      title: "Doctor of Philosophy - Management",
      description:
        "Advanced research in business analytics, digital transformation, sustainable business, and organizational behavior",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,80,000/year",
      category: "Management",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
      school: "School of Business Management & Entrepreneurship",
      featured: true,
    },
    {
      title: "Doctor of Philosophy - Arts & Humanities",
      description:
        "Research in literature, history, philosophy, cultural studies, and interdisciplinary humanities",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,30,000/year",
      category: "Arts",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      school: "School of Art & Humanities",
      featured: false,
    },
    {
      title: "Doctor of Philosophy - Agriculture",
      description:
        "Research in climate-smart agriculture, food security, sustainable farming, and agricultural biotechnology",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,50,000/year",
      category: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      school: "School of Agriculture",
      featured: false,
    },
    {
      title: "Doctor of Philosophy - Pharmacy",
      description:
        "Advanced pharmaceutical research, drug discovery, clinical trials, and pharmaceutical technology",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,70,000/year",
      category: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
      school: "School of Pharmacy",
      featured: false,
    },
    {
      title: "Doctor of Philosophy - Law",
      description:
        "Legal research in constitutional law, international law, cyber law, and legal reform",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,60,000/year",
      category: "Law",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=300&fit=crop",
      school: "School of Law",
      featured: false,
    },
    {
      title: "Doctor of Philosophy - Education",
      description:
        "Educational research in pedagogy, curriculum development, educational technology, and learning sciences",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,40,000/year",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      school: "School of Education",
      featured: false,
    },
    {
      title: "Doctor of Philosophy - Nursing",
      description:
        "Nursing research in healthcare delivery, patient outcomes, nursing education, and healthcare innovation",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,55,000/year",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      school: "School of Nursing",
      featured: false,
    },
    {
      title: "Doctor of Philosophy - Commerce & Finance",
      description:
        "Research in financial markets, digital commerce, fintech, and business economics",
      duration: "3-5 Years",
      level: "Ph.D",
      fees: "₹1,50,000/year",
      category: "Commerce",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
      school: "School of Commerce & Finance",
      featured: false,
    },
  ];

  // Notice Board Data
  const studentNotices = [
    {
      id: 1,
      title: "Mid-Term Examination Schedule Released for All Departments",
      date: "2025-09-15",
      type: "EXAM",
      isNew: true,
      link: "/notices/mid-term-exam-schedule",
    },
    {
      id: 2,
      title: "Industry Expert Session on AI & Machine Learning - Register Now",
      date: "2025-09-14",
      type: "EVENT",
      isNew: true,
      link: "/notices/ai-ml-expert-session",
    },
    {
      id: 3,
      title:
        "Scholarship Applications Open for Merit Students (Deadline: Oct 1)",
      date: "2025-09-13",
      type: "ADMISSION",
      isNew: true,
      link: "/notices/scholarship-applications",
    },
    {
      id: 4,
      title: "Campus Hostel Room Allocation for New Academic Year",
      date: "2025-09-12",
      type: "ADMISSION",
      isNew: false,
      link: "/notices/hostel-allocation",
    },
    {
      id: 5,
      title: "Sports Week 2025 - Events & Registration Details",
      date: "2025-09-11",
      type: "EVENT",
      isNew: false,
      link: "/notices/sports-week-2025",
    },
  ];

  const facultyNotices = [
    {
      id: 1,
      title: "Faculty Development Program on Digital Teaching Methods",
      date: "2025-09-15",
      type: "EVENT",
      isNew: true,
      link: "/notices/faculty-development-program",
    },
    {
      id: 2,
      title: "Research Grant Applications for Academic Year 2025-26",
      date: "2025-09-14",
      type: "ADMIN",
      isNew: true,
      link: "/notices/research-grant-applications",
    },
    {
      id: 3,
      title: "Updated Curriculum Guidelines for Engineering Programs",
      date: "2025-09-13",
      type: "ADMIN",
      isNew: false,
      link: "/notices/curriculum-guidelines-update",
    },
    {
      id: 4,
      title: "Academic Calendar Revision - Important Date Changes",
      date: "2025-09-12",
      type: "ADMIN",
      isNew: false,
      link: "/notices/academic-calendar-revision",
    },
  ];

  const allNotices = [
    {
      id: 1,
      title: "Diwali Festival Holiday - Campus Closure Notice",
      date: "2025-09-15",
      type: "HOLIDAY",
      isNew: true,
      link: "/notices/diwali-holiday-notice",
    },
    {
      id: 2,
      title: "New Library Resources & Digital Database Access",
      date: "2025-09-14",
      type: "FACILITY",
      isNew: true,
      link: "/notices/library-resources-update",
    },
    {
      id: 3,
      title: "Campus WiFi Maintenance Schedule - Temporary Disruption",
      date: "2025-09-13",
      type: "FACILITY",
      isNew: false,
      link: "/notices/wifi-maintenance-schedule",
    },
    {
      id: 4,
      title: "Annual Convocation 2025 - Registration & Schedule",
      date: "2025-09-11",
      type: "EVENT",
      isNew: false,
      link: "/notices/annual-convocation-2025",
    },
    {
      id: 5,
      title: "Health Center Services & Vaccination Drive Updates",
      date: "2025-09-10",
      type: "FACILITY",
      isNew: false,
      link: "/notices/health-center-updates",
    },
  ];

  const whyChoosePoints = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "NAAC A+ Accredited",
      description:
        "Recognized for academic excellence and quality education standards",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Expert Faculty",
      description:
        "Learn from professionals with real-world experience and academic expertise",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Partnerships",
      description:
        "Exchange programs and collaborations with universities worldwide",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research Excellence",
      description:
        "State-of-the-art labs and research facilities for innovation",
    },
  ];

  const news = [
    {
      title: "FS University Ranks Among Top 50 Engineering Colleges in India",
      description:
        "National ranking survey recognizes FS University's academic excellence and innovation in engineering education.",
      date: "March 15, 2024",
      category: "Rankings",
      href: "/news/ranking-announcement",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    },
    {
      title: "International Conference on AI and Machine Learning",
      description:
        "Three-day conference bringing together global experts to discuss latest trends in artificial intelligence.",
      date: "March 20-22, 2024",
      category: "Events",
      location: "Main Auditorium",
      href: "/events/ai-conference",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    },
    {
      title: "New Research Center for Sustainable Technology Inaugurated",
      description:
        "State-of-the-art facility dedicated to developing eco-friendly technological solutions.",
      date: "March 10, 2024",
      category: "Research",
      href: "/news/research-center",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
    },
  ];

  const testimonials = [
    {
      quote:
        "FS University provided me with not just education, but a complete transformation. The faculty's guidance and industry exposure helped me land my dream job at Google.",
      author: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&crop=face",
    },
    {
      quote:
        "The MBA program at FS University gave me the leadership skills and business acumen needed to start my own company. The entrepreneurship support was exceptional.",
      author: "Rahul Gupta",
      role: "CEO & Founder",
      company: "TechStart Solutions",
    },
    {
      quote:
        "The research opportunities and modern labs at FS University helped me publish papers in international journals. It's truly a world-class institution.",
      author: "Dr. Anjali Patel",
      role: "Research Scientist",
      company: "ISRO",
    },
  ];

  const recruiters = [
    {
      name: "Google",
      logo: "https://logo.clearbit.com/google.com",
      tier: "premium" as const,
    },
    {
      name: "Microsoft",
      logo: "https://logo.clearbit.com/microsoft.com",
      tier: "premium" as const,
    },
    {
      name: "Amazon",
      logo: "https://logo.clearbit.com/amazon.com",
      tier: "premium" as const,
    },
    {
      name: "TCS",
      logo: "https://logo.clearbit.com/tcs.com",
      tier: "standard" as const,
    },
    {
      name: "Infosys",
      logo: "https://logo.clearbit.com/infosys.com",
      tier: "standard" as const,
    },
    {
      name: "Wipro",
      logo: "https://logo.clearbit.com/wipro.com",
      tier: "standard" as const,
    },
    {
      name: "Deloitte",
      logo: "https://logo.clearbit.com/deloitte.com",
      tier: "premium" as const,
    },
    {
      name: "IBM",
      logo: "https://logo.clearbit.com/ibm.com",
      tier: "standard" as const,
    },
  ];

  // Notice Item Component
  const NoticeItem = ({ notice }: { notice: any }) => {
    const getTypeColor = (type: string) => {
      switch (type) {
        case "EXAM":
          return "bg-red-100 text-red-700 border-red-200";
        case "EVENT":
          return "bg-blue-100 text-blue-700 border-blue-200";
        case "HOLIDAY":
          return "bg-green-100 text-green-700 border-green-200";
        case "ADMISSION":
          return "bg-yellow-100 text-yellow-700 border-yellow-200";
        case "ADMIN":
          return "bg-purple-100 text-purple-700 border-purple-200";
        case "FACILITY":
          return "bg-orange-100 text-orange-700 border-orange-200";
        default:
          return "bg-gray-100 text-gray-700 border-gray-200";
      }
    };

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const today = new Date();
      const diffTime = today.getTime() - date.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) return "Today";
      if (diffDays === 1) return "Yesterday";
      if (diffDays <= 7) return `${diffDays} days ago`;
      return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year:
          date.getFullYear() !== today.getFullYear() ? "numeric" : undefined,
      });
    };

    return (
      <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-all duration-200 border border-transparent hover:border-neutral-200">
        {/* Date Block */}
        <div className="flex-shrink-0 bg-[var(--fsu-crimson)] text-white rounded-lg p-3 text-center min-w-[70px]">
          <div className="text-xs font-medium uppercase tracking-wide">
            {new Date(notice.date).toLocaleDateString("en-IN", {
              month: "short",
            })}
          </div>
          <div className="text-lg font-bold">
            {new Date(notice.date).getDate()}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <Link
              href={notice.link}
              className="font-semibold text-neutral-900 group-hover:text-[var(--fsu-crimson)] transition-colors duration-200 line-clamp-2 text-sm md:text-base"
            >
              {notice.title}
            </Link>
            {notice.isNew && (
              <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-xs font-bold px-2 py-1 flex-shrink-0">
                NEW
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                notice.type
              )}`}
            >
              {notice.type}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{formatDate(notice.date)}</span>
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="flex-shrink-0 text-neutral-400 group-hover:text-[var(--fsu-crimson)] transition-colors duration-200">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--fsu-maroon)] via-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] text-sm font-semibold px-4 py-1">
                  NAAC A+ Accredited University
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Shape Your Future at
                  <span className="block text-[var(--fsu-gold)]">
                    FS University
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
                  Where Excellence Meets Innovation. Join 25,000+ students in a
                  journey of academic excellence and career success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/apply">
                    Apply Now 2025
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[var(--fsu-crimson)] border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-4 text-lg"
                  asChild
                >
                  <Link href="/virtual-tour">
                    <Play className="mr-2 w-5 h-5" />
                    Virtual Campus Tour
                  </Link>
                </Button>
              </div>

              {/* Enhanced Brochure Download with Lead Collection */}
              <BrochureDownload />

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[var(--fsu-gold)] text-[var(--fsu-gold)]"
                    />
                  ))}
                </div>
                <span className="text-neutral-200">
                  Rated 4.9/5 by students
                </span>
              </div>
            </div>

            <div className="relative lg:block hidden">
              {/* Outer decorative border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-3xl opacity-30 blur-lg"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-3xl opacity-20"></div>

              {/* Main image container */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--fsu-gold)]/40 backdrop-blur-sm">
                <div className="relative w-full h-full">
                  <Image
                    src="https://fsu.edu.in/wp-content/uploads/2025/05/FS-univeristy-background.jpg"
                    alt="FS University Campus"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl"></div>
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      10,000+
                    </div>
                    <div className="text-sm text-neutral-600">
                      Active Students
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--fsu-gold)] rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-[var(--fsu-crimson)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--fsu-crimson)]">
                      95%
                    </div>
                    <div className="text-sm text-neutral-600">
                      Placement Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AccreditationMarquee />

      {/* Trust & Stats Bar */}
      <section className="py-12 bg-neutral-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Marquee */}

      {/* Notice Board Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-crimson)] text-white mb-4 flex items-center gap-2 mx-auto w-fit">
              <Bell className="w-4 h-4" />
              Live Updates
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Announcements & Notices
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Stay informed with the latest updates, events, and important
              announcements from FS University
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button
              onClick={() => setNoticeTab("students")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                noticeTab === "students"
                  ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                  : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              For Students
            </button>
            <button
              onClick={() => setNoticeTab("all")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                noticeTab === "all"
                  ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                  : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              All Notices
            </button>
            <button
              onClick={() => setNoticeTab("faculty")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                noticeTab === "faculty"
                  ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                  : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              }`}
            >
              <Users className="w-4 h-4" />
              For Faculty
            </button>
          </div>

          {/* Notice Board Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
              <div className="h-96 overflow-y-auto custom-scrollbar">
                <div className="p-6">
                  {/* Student Notices */}
                  {noticeTab === "students" && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {studentNotices.map((notice) => (
                        <NoticeItem key={notice.id} notice={notice} />
                      ))}
                    </div>
                  )}

                  {/* All Notices */}
                  {noticeTab === "all" && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {allNotices.map((notice) => (
                        <NoticeItem key={notice.id} notice={notice} />
                      ))}
                    </div>
                  )}

                  {/* Faculty Notices */}
                  {noticeTab === "faculty" && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      {facultyNotices.map((notice) => (
                        <NoticeItem key={notice.id} notice={notice} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* View All CTA */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white font-semibold"
                asChild
              >
                <Link href="/notice-board">
                  View All Notices
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: var(--fsu-crimson);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: var(--fsu-maroon);
          }
        `}</style>
      </section>

      {/* Programs Showcase with Tabs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Academic Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore our diverse range of diploma, undergraduate, postgraduate,
              and doctoral programs designed to meet industry demands and
              research excellence.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button
              onClick={() => setActiveTab("diploma")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "diploma"
                  ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                  : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              }`}
            >
              Diploma Programs
            </button>
            <button
              onClick={() => setActiveTab("undergraduate")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "undergraduate"
                  ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                  : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              }`}
            >
              Under Graduate Programs
            </button>
            <button
              onClick={() => setActiveTab("postgraduate")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "postgraduate"
                  ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                  : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              }`}
            >
              Post Graduate Programs
            </button>
            <button
              onClick={() => setActiveTab("doctoral")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "doctoral"
                  ? "bg-[var(--fsu-crimson)] text-white shadow-lg"
                  : "bg-white text-[var(--fsu-crimson)] border border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              }`}
            >
              Doctoral Programs
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "diploma" && (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-in fade-in duration-500 max-w-6xl">
                  {diplomaPrograms.slice(0, 3).map((program, index) => (
                    <ProgramCard
                      key={index}
                      id={`diploma-program-${index}`}
                      title={program.title}
                      description={program.description}
                      duration={program.duration}
                      level={
                        program.level as
                          | "Undergraduate"
                          | "Graduate"
                          | "Doctoral"
                          | "Certificate"
                      }
                      department={program.category}
                      fees={program.fees}
                      image={program.image}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "undergraduate" && (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-in fade-in duration-500 max-w-6xl">
                  {undergraduatePrograms.slice(0, 3).map((program, index) => (
                    <ProgramCard
                      key={index}
                      id={`undergraduate-program-${index}`}
                      title={program.title}
                      description={program.description}
                      duration={program.duration}
                      level={
                        program.level as
                          | "Undergraduate"
                          | "Graduate"
                          | "Doctoral"
                          | "Certificate"
                      }
                      department={program.category}
                      fees={program.fees}
                      image={program.image}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "postgraduate" && (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-in fade-in duration-500 max-w-6xl">
                  {postgraduatePrograms.slice(0, 3).map((program, index) => (
                    <ProgramCard
                      key={index}
                      id={`postgraduate-program-${index}`}
                      title={program.title}
                      description={program.description}
                      duration={program.duration}
                      level={
                        program.level as
                          | "Undergraduate"
                          | "Graduate"
                          | "Doctoral"
                          | "Certificate"
                      }
                      department={program.category}
                      fees={program.fees}
                      image={program.image}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "doctoral" && (
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-in fade-in duration-500 max-w-6xl">
                  {doctoralPrograms.slice(0, 3).map((program, index) => (
                    <ProgramCard
                      key={index}
                      id={`doctoral-program-${index}`}
                      title={program.title}
                      description={program.description}
                      duration={program.duration}
                      level={
                        program.level as
                          | "Undergraduate"
                          | "Graduate"
                          | "Doctoral"
                          | "Certificate"
                      }
                      department={program.category}
                      fees={program.fees}
                      image={program.image}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              asChild
            >
              <Link href="/programs">
                View All Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose FSU */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
                Why Choose FS University
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Excellence in Every Aspect of Education
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                With over two decades of educational excellence, FS University
                stands as a beacon of quality education, research innovation,
                and industry partnerships.
              </p>

              <div className="space-y-6">
                {whyChoosePoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center text-white">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-neutral-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://fsu.edu.in/wp-content/uploads/2025/03/about-fs-university-slide2.jpg"
                  alt="FS University Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Visual Showcase */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Campus Life
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Life Beyond Academics
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experience a vibrant campus life with modern facilities, diverse
              communities, and endless opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              <div
                className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(0)}
              >
                <Image
                  src="https://fsu.edu.in/wp-content/uploads/2025/04/International-Seminar-on-Mental-Health-and-Emotional-Wellbeing.jpg"
                  alt="International Seminar"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(1)}
              >
                <Image
                  src="https://fsu.edu.in/wp-content/uploads/2025/04/FS-University-Event.jpg"
                  alt="University Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div
                className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(2)}
              >
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5622AQFKUB66BRkzTA/feedshare-shrink_2048_1536/B56ZUc1HvrGsAo-/0/1739945456203?e=1761177600&v=beta&t=1E-GSwAHkn3zgHMBfQhxgeze1ASQGwSVRn5OCboDA1E"
                  alt="Campus Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(3)}
              >
                <Image
                  src="https://fsu.edu.in/wp-content/uploads/2024/12/Academic-Facilities.jpg"
                  alt="Student Hostels"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div
                className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(4)}
              >
                <Image
                  src="https://fsu.edu.in/wp-content/uploads/2024/12/FSU.jpg"
                  alt="Campus Life"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(5)}
              >
                <Image
                  src="https://fsu.edu.in/wp-content/uploads/2024/12/Gymnasium.jpg"
                  alt="Gymnasium"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="space-y-4">
              <div
                className="relative h-32 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(6)}
              >
                <Image
                  src="https://fsu.edu.in/wp-content/uploads/2025/04/IMGL9732.jpg"
                  alt="Student Interaction"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative h-48 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openGallery(7)}
              >
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5622AQFSUzstKiqctQ/feedshare-shrink_2048_1536/B56ZUc1HuUGUAw-/0/1739945448488?e=1761177600&v=beta&t=5ft_zdecSOl-W5Gq2wL62lv8fXW8pM8-jDiL2xfu3aQ"
                  alt="Campus Events"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              asChild
            >
              <Link href="/campus-life">
                Explore Campus Life
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Placements & Recruiters */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Placements & Careers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Your Gateway to Global Careers
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              With 95% placement rate and partnerships with top global
              companies, your dream career is within reach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-xl opacity-20 blur-sm"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-xl opacity-15"></div>

              <Card className="relative text-center p-6 border-2 border-[var(--fsu-gold)]/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[var(--fsu-crimson)] mb-2">
                    ₹12 LPA
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    Average Package
                  </div>
                  <div className="text-neutral-600">Class of 2024</div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-xl opacity-20 blur-sm"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-xl opacity-15"></div>

              <Card className="relative text-center p-6 border-2 border-[var(--fsu-gold)]/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[var(--fsu-crimson)] mb-2">
                    ₹45 LPA
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    Highest Package
                  </div>
                  <div className="text-neutral-600">International Offer</div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--fsu-gold)] via-[var(--fsu-crimson)] to-[var(--fsu-gold)] rounded-xl opacity-20 blur-sm"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--fsu-gold)] via-white to-[var(--fsu-gold)] rounded-xl opacity-15"></div>

              <Card className="relative text-center p-6 border-2 border-[var(--fsu-gold)]/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[var(--fsu-crimson)] mb-2">
                    500+
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    Company Partners
                  </div>
                  <div className="text-neutral-600">Global Recruiters</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">
              Our Recruiting Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {recruiters.map((recruiter, index) => (
                <CompanyLogo key={index} {...recruiter} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)]"
              asChild
            >
              <Link href="/placements">
                View Placement Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              News & Events
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Stay Updated with Campus Life
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Keep up with the latest news, events, and achievements from the FS
              University community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {news.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
              asChild
            >
              <Link href="/news">
                View All News
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] mb-4">
              Student Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from our alumni who are making their mark in various
              industries around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[var(--fsu-maroon)] to-[var(--fsu-crimson)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are building their future at FS
            University. Your success story starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--fsu-gold)] text-[var(--fsu-crimson)] hover:bg-[#D4A017] font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/apply">
                Apply for Admission 2025
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--fsu-crimson)] px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Talk to Counselor</Link>
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-neutral-200 mb-4">
              Admissions Open for 2025-26 Academic Year
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Easy Online Application</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Scholarship Opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Industry-Ready Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA Component */}
      <ApplyCTA variant="sticky" />

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={campusImages}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        initialIndex={galleryInitialIndex}
      />
    </div>
  );
}
