"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, GraduationCap, Users } from "lucide-react";

const FloatingButtons = () => {
  const leftButtons = [
    {
      id: "enquire",
      title: "Enquire Now",
      icon: MessageCircle,
      href: "/enquiry",
      description: "Get instant answers to your questions",
    },
    {
      id: "classroom",
      title: "Class Commencements",
      icon: Calendar,
      href: "/academics/calendar",
      description: "View upcoming batch schedules",
    },
  ];

  const rightButtons = [
    {
      id: "apply",
      title: "Apply Now",
      icon: GraduationCap,
      href: "/apply",
      description: "Start your admission process",
    },
    {
      id: "students",
      title: "Talk to Our Students",
      icon: Users,
      href: "/student-connect",
      description: "Connect with current students",
    },
  ];

  return (
    <>
      {/* Left Side Floating Buttons */}
      <div className="fixed left-4 top-[40%] z-40 hidden lg:flex flex-col space-y-3">
        {leftButtons.map((action) => {
          const IconComponent = action.icon;
          return (
            <div key={action.id} className="group relative">
              {/* Tooltip */}
              <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-3 min-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border z-50">
                <h4 className="font-semibold text-sm text-gray-800 mb-1">
                  {action.title}
                </h4>
                <p className="text-xs text-gray-600">{action.description}</p>
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-8 border-r-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>

              {/* Text Button */}
              <Button
                asChild
                className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-4 py-3 rounded-r-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border-2 border-white flex items-center space-x-2 min-w-[160px] justify-start"
              >
                <Link href={action.href}>
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{action.title}</span>
                </Link>
              </Button>
            </div>
          );
        })}
      </div>

      {/* Right Side Floating Buttons */}
      <div className="fixed right-4 top-[40%] z-40 hidden lg:flex flex-col space-y-3">
        {rightButtons.map((action) => {
          const IconComponent = action.icon;
          const isApplyButton = action.id === "apply";

          return (
            <div key={action.id} className="group relative">
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-3 min-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border z-50">
                <h4 className="font-semibold text-sm text-gray-800 mb-1">
                  {action.title}
                </h4>
                <p className="text-xs text-gray-600">{action.description}</p>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>

              {/* Text Button */}
              <Button
                asChild
                className={`${
                  isApplyButton
                    ? "bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)]"
                    : "bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
                } px-4 py-3 rounded-l-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border-2 border-white flex items-center space-x-2 min-w-[180px] justify-end font-semibold`}
              >
                <Link href={action.href}>
                  <span className="text-sm font-medium">{action.title}</span>
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>
          );
        })}
      </div>

      {/* Mobile Floating Buttons - Bottom */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="flex flex-wrap gap-2 bg-white shadow-2xl rounded-full p-3 border max-w-[90vw] justify-center">
          {/* Enquire and Apply - Primary actions */}
          <Button
            asChild
            className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-xs font-medium"
          >
            <Link href="/enquiry" className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>Enquire</span>
            </Link>
          </Button>

          <Button
            asChild
            className="bg-[var(--fsu-gold)] hover:bg-[#D4A017] text-[var(--fsu-crimson)] px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-xs font-semibold"
          >
            <Link href="/apply" className="flex items-center space-x-1">
              <GraduationCap className="w-4 h-4" />
              <span>Apply Now</span>
            </Link>
          </Button>

          {/* Secondary actions */}
          <Button
            asChild
            className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-3 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-xs"
          >
            <Link
              href="/academics/calendar"
              className="flex items-center space-x-1"
            >
              <Calendar className="w-4 h-4" />
              <span>Classes</span>
            </Link>
          </Button>

          <Button
            asChild
            className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-3 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-xs"
          >
            <Link
              href="/student-connect"
              className="flex items-center space-x-1"
            >
              <Users className="w-4 h-4" />
              <span>Students</span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
