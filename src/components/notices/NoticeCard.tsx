import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, ExternalLink, Pin } from 'lucide-react';
import { format } from 'date-fns';

interface NoticeCardProps {
  id: string;
  title: string;
  description?: string;
  publishDate: Date;
  type: 'Academic' | 'Administrative' | 'Examination' | 'Event' | 'General';
  department?: string;
  isPinned?: boolean;
  isNew?: boolean;
  downloadUrl?: string;
  externalUrl?: string;
}

const NoticeCard: React.FC<NoticeCardProps> = ({
  id,
  title,
  description,
  publishDate,
  type,
  department,
  isPinned = false,
  isNew = false,
  downloadUrl,
  externalUrl
}) => {
  const typeColors = {
    'Academic': 'bg-blue-100 text-blue-800',
    'Administrative': 'bg-gray-100 text-gray-800',
    'Examination': 'bg-red-100 text-red-800',
    'Event': 'bg-green-100 text-green-800',
    'General': 'bg-yellow-100 text-yellow-800',
  };

  return (
    <Card className={`transition-all duration-300 hover:shadow-md ${isPinned ? 'ring-1 ring-[var(--fsu-gold)]' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={typeColors[type]} variant="secondary">
                {type}
              </Badge>
              {isPinned && (
                <Badge variant="outline" className="text-[var(--fsu-gold)] border-[var(--fsu-gold)]">
                  <Pin className="w-3 h-3 mr-1" />
                  Pinned
                </Badge>
              )}
              {isNew && (
                <Badge className="bg-[var(--fsu-crimson)] text-white">
                  New
                </Badge>
              )}
            </div>
            <CardTitle className="text-lg font-semibold text-[var(--fsu-crimson)] line-clamp-2">
              {title}
            </CardTitle>
            {department && (
              <p className="text-sm text-neutral-600 mt-1">{department}</p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center text-sm text-neutral-600 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Published: {format(publishDate, 'MMM dd, yyyy')}</span>
        </div>

        {description && (
          <p className="text-neutral-700 text-sm line-clamp-3 mb-4">
            {description}
          </p>
        )}

        <div className="flex gap-2 flex-wrap">
          <Button 
            variant="outline" 
            size="sm"
            className="border-[var(--fsu-crimson)] text-[var(--fsu-crimson)] hover:bg-[var(--fsu-crimson)] hover:text-white"
            asChild
          >
            <Link href={`/notices/${id}`}>
              View Details
            </Link>
          </Button>
          
          {downloadUrl && (
            <Button 
              variant="outline" 
              size="sm"
              asChild
            >
              <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Link>
            </Button>
          )}
          
          {externalUrl && (
            <Button 
              variant="outline" 
              size="sm"
              asChild
            >
              <Link href={externalUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Link
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;
