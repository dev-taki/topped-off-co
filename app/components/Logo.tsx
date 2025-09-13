import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'minimal' | 'stacked';
  className?: string;
  showTagline?: boolean;
  color?: 'default' | 'white' | 'primary';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'default',
  className = '', 
  showTagline = false,
  color = 'default'
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl'
  };

  const taglineSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
    '2xl': 'text-xl'
  };

  const colorClasses = {
    default: {
      main: 'text-gray-900',
      tagline: 'text-gray-600'
    },
    white: {
      main: 'text-white',
      tagline: 'text-gray-200'
    },
    primary: {
      main: 'text-gray-900',
      tagline: 'text-gray-700'
    }
  };

  const colors = colorClasses[color];

  if (variant === 'minimal') {
    return (
      <div className={`text-center ${className}`}>
        <div className={`hatton-ultralight text-[64.5px] ${colors.main} leading-none uppercase`}>
          Topped
        </div>
        <div className={`hatton-ultralight text-[64.5px] ${colors.main} leading-none uppercase -mt-1`}>
          off co.
        </div>
        {showTagline && (
          <div className={`font-medium text-[11.2px] ${colors.tagline} mt-1 uppercase`} style={{ letterSpacing: '0.8em', fontFamily: 'var(--font-family-montserrat)' }}>
            luxury designs
          </div>
        )}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`text-center ${className}`}>
        <div className={`hatton-ultralight text-[64.5px] ${colors.main} leading-none uppercase`}>
          Topped
        </div>
        <div className={`hatton-ultralight text-[64.5px] ${colors.main} leading-none uppercase -mt-1`}>
          off co.
        </div>
        {showTagline && (
          <div className={`font-medium text-[11.2px] ${colors.tagline} mt-1 uppercase`} style={{ letterSpacing: '0.8em', fontFamily: 'var(--font-family-montserrat)' }}>
            luxury designs
          </div>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`text-center ${className}`}>
      <div className={`hatton-ultralight text-[64.5px] ${colors.main} leading-none uppercase`}>
        Topped
      </div>
      <div className={`hatton-ultralight text-[64.5px] ${colors.main} leading-none uppercase -mt-1`}>
        off co.
      </div>
      {showTagline && (
        <div className={`font-medium text-[11.2px] ${colors.tagline} mt-1 uppercase`} style={{ letterSpacing: '0.8em', fontFamily: 'var(--font-family-montserrat)' }}>
          luxury designs
        </div>
      )}
    </div>
  );
};

export default Logo;
