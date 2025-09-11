'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Calendar, 
  Clock, 
  Eye, 
  Filter,
  ArrowRight,
  TrendingUp,
  Bell,
  Users
} from 'lucide-react';
import newsData from '@/data/news-articles.json';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleArticles, setVisibleArticles] = useState(6);

  // Get all categories from articles
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(newsData.articles.map(article => article.category))];
    return cats;
  }, []);

  // Filter articles based on search and category
  const filteredArticles = useMemo(() => {
    return newsData.articles.filter(article => {
      const matchesSearch = searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const loadMore = () => {
    setVisibleArticles(prev => prev + 6);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setVisibleArticles(6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:underline hover:text-[var(--fsu-crimson)]">Home</Link>
                <span>/</span>
                <span>News & Media</span>
              </nav>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-[var(--fsu-crimson)] rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  News & Media Hub
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Stay updated with the latest news, achievements, and developments at FS University.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-red-100 text-red-800">
                    <Bell className="w-3 h-3 mr-1" />
                    Breaking News
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    {filteredArticles.length} Stories
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Story Banner */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-maroon)] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <Badge className="bg-white/20 text-white border-white/30 w-fit mb-4">
                  Featured Story
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {newsData.heroStory.title}
                </h2>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  {newsData.heroStory.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6 text-sm text-white/80">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(newsData.heroStory.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{newsData.heroStory.readTime} read</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{newsData.heroStory.views.toLocaleString()} views</span>
                  </div>
                </div>
                <Button 
                  asChild
                  className="bg-white text-[var(--fsu-crimson)] hover:bg-gray-100 w-fit"
                >
                  <Link href={`/news/${newsData.heroStory.slug}`}>
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* Image */}
              <div className="relative bg-white/10">
                <Image
                  src={newsData.heroStory.image}
                  alt={newsData.heroStory.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/20 text-white border-white/30">
                    {newsData.heroStory.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8">
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search news, announcements, events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`${
                        selectedCategory === category
                          ? 'bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white'
                          : 'text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white'
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Reset */}
              {(searchTerm || selectedCategory !== 'All') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear Filters
                </Button>
              )}
            </div>
            
            {/* Results summary */}
            <div className="mt-4 pt-4 border-t text-sm text-gray-600">
              Showing {Math.min(visibleArticles, filteredArticles.length)} of {filteredArticles.length} articles
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredArticles.slice(0, visibleArticles).map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-black/70 text-white">
                    {article.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {article.readTime}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-[var(--fsu-crimson)] transition-colors">
                  <Link href={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-gray-600">{article.author}</span>
                  </div>
                  
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-[var(--fsu-crimson)] hover:text-[var(--fsu-maroon)] p-1"
                  >
                    <Link href={`/news/${article.slug}`}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {visibleArticles < filteredArticles.length && (
          <div className="text-center">
            <Button 
              onClick={loadMore}
              className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-8 py-3"
            >
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <TrendingUp className="w-8 h-8 mx-auto mb-4 text-[var(--fsu-crimson)]" />
            <h3 className="font-semibold text-gray-900 mb-2">Press Releases</h3>
            <p className="text-sm text-gray-600 mb-4">Official announcements and press materials</p>
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
            >
              <Link href="/media-kit">View Media Kit</Link>
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Calendar className="w-8 h-8 mx-auto mb-4 text-[var(--fsu-crimson)]" />
            <h3 className="font-semibold text-gray-900 mb-2">Event Calendar</h3>
            <p className="text-sm text-gray-600 mb-4">Upcoming events and important dates</p>
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
            >
              <Link href="/academics/calendar">View Calendar</Link>
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Bell className="w-8 h-8 mx-auto mb-4 text-[var(--fsu-crimson)]" />
            <h3 className="font-semibold text-gray-900 mb-2">Notice Board</h3>
            <p className="text-sm text-gray-600 mb-4">Important notices and updates</p>
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)]"
            >
              <Link href="/notice-board">View Notices</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
