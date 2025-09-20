import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    name: process.env.NEXT_PUBLIC_PWA_NAME!,
    short_name: process.env.NEXT_PUBLIC_PWA_SHORT_NAME!,
    description: process.env.NEXT_PUBLIC_PWA_DESCRIPTION!,
    start_url: '/',
    display: 'standalone',
    background_color: process.env.NEXT_PUBLIC_BACKGROUND_PRIMARY!,
    theme_color: process.env.NEXT_PUBLIC_PRIMARY_COLOR!,
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['business', 'productivity'],
    icons: [
      {
        src: '/mobile-icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/mobile-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    shortcuts: [
      {
        name: 'Dashboard',
        short_name: 'Dashboard',
        description: 'Go to dashboard',
        url: '/admin/dashboard',
        icons: [
          {
            src: '/mobile-icon.png',
            sizes: '192x192'
          }
        ]
      },
      {
        name: 'Profile',
        short_name: 'Profile',
        description: 'View your profile',
        url: '/admin/profile',
        icons: [
          {
            src: '/mobile-icon.png',
            sizes: '192x192'
          }
        ]
      },
      {
        name: 'Plans',
        short_name: 'Plans',
        description: 'View available plans',
        url: '/plans',
        icons: [
          {
            src: '/mobile-icon.png',
            sizes: '192x192'
          }
        ]
      },
      {
        name: 'Redeem',
        short_name: 'Redeem',
        description: 'View redeem options',
        url: '/redeem',
        icons: [
          {
            src: '/mobile-icon.png',
            sizes: '192x192'
          }
        ]
      }
    ]
  };

  return NextResponse.json(manifest);
}
