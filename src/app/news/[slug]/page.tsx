import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Eye, 
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import newsData from '@/data/news-articles.json';

// Generate static params for all articles
export function generateStaticParams() {
  // Include both hero story and regular articles
  const heroParams = [{ slug: newsData.heroStory.slug }];
  const articleParams = newsData.articles.map((article) => ({
    slug: article.slug
  }));
  
  return [...heroParams, ...articleParams];
}

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  // Find the article by slug (check both heroStory and articles)
  const article = params.slug === newsData.heroStory.slug 
    ? newsData.heroStory 
    : newsData.articles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = article.relatedArticles 
    ? newsData.articles.filter(a => article.relatedArticles?.includes(a.id))
    : newsData.articles.slice(0, 3);

  // Social sharing functionality
  const shareTitle = encodeURIComponent(article.title);
  const shareText = encodeURIComponent(article.excerpt);
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://fs-university.com' 
    : 'http://localhost:3001';
  const shareUrl = `${baseUrl}/news/${params.slug}`;

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    email: `mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${shareUrl}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:underline hover:text-[var(--fsu-crimson)]">Home</Link>
              <span>/</span>
              <Link href="/news" className="hover:underline hover:text-[var(--fsu-crimson)]">News & Media</Link>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </nav>
            
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
            >
              <Link href="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Badge className="bg-[var(--fsu-crimson)] text-white">
              {article.category}
            </Badge>
            {params.slug === newsData.heroStory.slug && (
              <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                Featured
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white rounded-lg border">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{article.views.toLocaleString()} views</span>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 mr-2">Share:</span>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="p-2"
              >
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4 text-blue-600" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="p-2"
              >
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 text-blue-400" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="p-2"
              >
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 text-blue-700" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="p-2"
              >
                <a href={socialLinks.email}>
                  <Mail className="w-4 h-4 text-gray-600" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden bg-gray-200">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Author Info */}
        <div className="flex items-center space-x-4 p-6 bg-white rounded-lg border mb-8">
          <div className="w-12 h-12 bg-[var(--fsu-crimson)] rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{article.author}</h3>
            {('authorTitle' in article) && article.authorTitle && (
              <p className="text-sm text-gray-600">{article.authorTitle}</p>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-white p-8 rounded-lg border">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-[var(--fsu-crimson)] border-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="w-6 h-6 text-[var(--fsu-crimson)]" />
              <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
                  <div className="relative h-32 bg-gray-200">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-black/70 text-white text-xs">
                        {relatedArticle.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 leading-tight group-hover:text-[var(--fsu-crimson)] transition-colors">
                      <Link href={`/news/${relatedArticle.slug}`}>
                        {relatedArticle.title}
                      </Link>
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{new Date(relatedArticle.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                      
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-[var(--fsu-crimson)] hover:text-[var(--fsu-maroon)] p-1 h-auto"
                      >
                        <Link href={`/news/${relatedArticle.slug}`}>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Back to News */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-[var(--fsu-crimson)] hover:bg-[var(--fsu-maroon)] text-white px-8 py-3"
          >
            <Link href="/news">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All News
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
