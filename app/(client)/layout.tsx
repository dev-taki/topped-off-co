'use client';

import React, { useEffect } from 'react';
import ClientBottomNav from '../components/ClientBottomNav';

declare global {
  interface Window {
    Square: any;
  }
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load Square script for payment functionality
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Square) {
      // Remove any existing Square scripts to avoid conflicts
      const existingScripts = document.querySelectorAll('script[src*="squarecdn.com"]');
      existingScripts.forEach(script => script.remove());
      
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://web.squarecdn.com/v1/square.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://web.squarecdn.com/v1/square.js';
        script.async = true;
        script.onload = () => {
          console.log('Square script loaded in client layout');
        };
        script.onerror = () => {
          console.error('Failed to load Square script');
        };
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {children}
      <ClientBottomNav />
    </div>
  );
}
