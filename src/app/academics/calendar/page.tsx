"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  Filter,
  BookOpen,
  Trophy,
  Home,
  Clock
} from 'lucide-react';

const AcademicCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedProgram, setSelectedProgram] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const programs = ['All', 'B.Tech', 'M.Tech', 'MBA', 'BBA', 'Law', 'Medical', 'PhD'];
  const years = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year', '1st Semester', '2nd Semester'];

  const eventTypes = {
    exam: { color: 'bg-red-500', label: 'Examinations', icon: BookOpen },
    holiday: { color: 'bg-green-500', label: 'Holidays', icon: Home },
    event: { color: 'bg-blue-500', label: 'Events & Festivals', icon: Trophy },
    important: { color: 'bg-purple-500', label: 'Important Dates', icon: Clock }
  };

  const calendarEvents = [
    { date: '2025-09-15', title: 'Mid-Term Examinations Begin', type: 'exam', programs: ['All'] },
    { date: '2025-09-20', title: 'Mid-Term Examinations End', type: 'exam', programs: ['All'] },
    { date: '2025-10-02', title: 'Gandhi Jayanti', type: 'holiday', programs: ['All'] },
    { date: '2025-10-15', title: 'Tech Fest "Innovate 2025"', type: 'event', programs: ['B.Tech', 'M.Tech'] },
    { date: '2025-10-20', title: 'Diwali Break Begins', type: 'holiday', programs: ['All'] },
    { date: '2025-10-25', title: 'Management Fest "BizCon 2025"', type: 'event', programs: ['MBA', 'BBA'] },
    { date: '2025-11-01', title: 'Classes Resume', type: 'important', programs: ['All'] },
    { date: '2025-11-15', title: 'Project Submission Deadline', type: 'important', programs: ['B.Tech', 'M.Tech'] },
    { date: '2025-12-01', title: 'End-Term Examinations Begin', type: 'exam', programs: ['All'] },
    { date: '2025-12-15', title: 'End-Term Examinations End', type: 'exam', programs: ['All'] },
    { date: '2025-12-25', title: 'Christmas Holiday', type: 'holiday', programs: ['All'] },
    { date: '2026-01-01', title: 'New Year Holiday', type: 'holiday', programs: ['All'] },
    { date: '2026-01-15', title: 'Result Declaration', type: 'important', programs: ['All'] },
    { date: '2026-01-26', title: 'Republic Day', type: 'holiday', programs: ['All'] },
    { date: '2026-02-01', title: 'New Semester Begins', type: 'important', programs: ['All'] }
  ];

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return calendarEvents.filter(event => 
      event.date === dateStr && 
      (selectedProgram === 'All' || event.programs.includes(selectedProgram) || event.programs.includes('All'))
    );
  };

  const getFilteredEvents = () => {
    return calendarEvents.filter(event => {
      const eventDate = new Date(event.date);
      const isInCurrentMonth = eventDate.getMonth() === currentDate.getMonth() && 
                               eventDate.getFullYear() === currentDate.getFullYear();
      const matchesProgram = selectedProgram === 'All' || event.programs.includes(selectedProgram) || event.programs.includes('All');
      return isInCurrentMonth && matchesProgram;
    }).sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDate(day);
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === currentDate.getMonth() && 
                     new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <div key={day} className={`h-24 border border-gray-200 p-1 relative ${isToday ? 'bg-blue-50' : 'bg-white'}`}>
          <div className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          <div className="mt-1 space-y-1">
            {events.slice(0, 2).map((event, index) => (
              <div key={index} className={`text-xs px-1 py-0.5 rounded ${eventTypes[event.type as keyof typeof eventTypes].color} text-white truncate`}>
                {event.title}
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-gray-500">+{events.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[var(--fsu-crimson)] mb-2">
                Academic Calendar 2025-2026
              </h1>
              <p className="text-gray-600">
                Stay updated with important dates, examinations, and events throughout the academic year.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Calendar (PDF)
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <select 
                value={selectedProgram} 
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)]"
              >
                <option value="">Select Program</option>
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
              
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--fsu-crimson)]"
              >
                <option value="">Select Year/Semester</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* Calendar Display */}
          <div className="xl:col-span-3">
            <Card className="p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {getMonthName(currentDate)}
                </h2>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth('prev')}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth('next')}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
                {/* Day Headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="bg-gray-100 p-3 text-center text-sm font-medium text-gray-700 border-b border-gray-200">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {renderCalendarDays()}
              </div>

              {/* Legend */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legend</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {Object.entries(eventTypes).map(([key, type]) => {
                    const IconComponent = type.icon;
                    return (
                      <div key={key} className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${type.color}`}></div>
                        <IconComponent className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">{type.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[var(--fsu-crimson)] mb-4 flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Upcoming Events
              </h3>
              
              <div className="space-y-3">
                {getFilteredEvents().map((event, index) => {
                  const eventType = eventTypes[event.type as keyof typeof eventTypes];
                  const IconComponent = eventType.icon;
                  const eventDate = new Date(event.date);
                  
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-8 h-8 rounded-full ${eventType.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {event.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {eventDate.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {eventType.label}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] text-white">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <div className="space-y-2">
                <a href="/exam-schedule" className="block text-sm hover:underline opacity-90">
                  Detailed Exam Schedule
                </a>
                <a href="/academic-regulations" className="block text-sm hover:underline opacity-90">
                  Academic Regulations
                </a>
                <a href="/holiday-list" className="block text-sm hover:underline opacity-90">
                  Complete Holiday List
                </a>
                <a href="/contact" className="block text-sm hover:underline opacity-90">
                  Academic Office Contact
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendarPage;
