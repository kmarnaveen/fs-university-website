import React from 'react';

interface NoticeProps {
  children: React.ReactNode;
  type: 'info' | 'warning' | 'error' | 'success';
  className?: string;
}

export const Notice: React.FC<NoticeProps> = ({
  children,
  type,
  className = '',
}) => {
  const typeClasses = {
    info: 'notice-info',
    warning: 'notice-warning',
    error: 'notice-error',
    success: 'notice-success',
  };
  
  const icons = {
    info: '📢',
    warning: '⚠️',
    error: '❌',
    success: '✅',
  };
  
  return (
    <div className={`${typeClasses[type]} ${className}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
};
