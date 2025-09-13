// Color Configuration - Change these colors to customize your app's theme
export const COLORS = {
  // Primary Colors - Main brand colors
  primary: {
    main: '#3B3B3B',      // Main primary color - Brand Dark Gray
    light: '#4A4A4A',     // Lighter shade
    dark: '#2D2D2D',      // Darker shade
    hover: '#333333',     // Hover state
    text: '#FFFFFF',      // Text on primary background
  },
  
  // Secondary Colors - Supporting colors
  secondary: {
    main: '#6B7280',      // Main secondary color
    light: '#9CA3AF',     // Lighter shade
    dark: '#4B5563',      // Darker shade
    hover: '#5B6366',     // Hover state
    text: '#FFFFFF',      // Text on secondary background
  },
  
  // Accent Colors
  accent: {
    blue: '#3B82F6',      // Blue accent
    green: '#10B981',     // Green accent
    red: '#EF4444',       // Red accent
    yellow: '#F59E0B',    // Yellow accent
    purple: '#8B5CF6',    // Purple accent
  },
  
  // Status Colors
  success: {
    main: '#10B981',
    light: '#34D399',
    dark: '#059669',
    text: '#FFFFFF',
  },
  
  error: {
    main: '#EF4444',
    light: '#F87171',
    dark: '#DC2626',
    text: '#FFFFFF',
  },
  
  warning: {
    main: '#F59E0B',
    light: '#FBBF24',
    dark: '#D97706',
    text: '#FFFFFF',
  },
  
  info: {
    main: '#3B82F6',
    light: '#60A5FA',
    dark: '#2563EB',
    text: '#FFFFFF',
  },
  
  // Brand Colors - Core brand palette
  brand: {
    primary: '#3B3B3B',    // Brand Dark Gray
    white: '#FFFFFF',      // Brand White
    black: '#000000',      // Brand Black
  },
  
  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  
  // Background Colors
  background: {
    primary: '#FFFFFF',      // Brand White
    secondary: '#F9FAFB',
    dark: '#000000',         // Brand Black
    brand: '#3B3B3B',        // Brand Dark Gray
  },
  
  // Text Colors
  text: {
    primary: '#000000',      // Brand Black
    secondary: '#3B3B3B',    // Brand Dark Gray
    disabled: '#9CA3AF',
    inverse: '#FFFFFF',      // Brand White
    brand: '#3B3B3B',        // Brand Dark Gray
  },
} as const;

// CSS Custom Properties for use in CSS
export const CSS_COLOR_VARS = {
  // Brand Colors
  '--color-brand-primary': COLORS.brand.primary,
  '--color-brand-white': COLORS.brand.white,
  '--color-brand-black': COLORS.brand.black,
  
  // Primary Colors
  '--color-primary': COLORS.primary.main,
  '--color-primary-light': COLORS.primary.light,
  '--color-primary-dark': COLORS.primary.dark,
  '--color-primary-hover': COLORS.primary.hover,
  '--color-primary-text': COLORS.primary.text,
  
  '--color-secondary': COLORS.secondary.main,
  '--color-secondary-light': COLORS.secondary.light,
  '--color-secondary-dark': COLORS.secondary.dark,
  '--color-secondary-hover': COLORS.secondary.hover,
  '--color-secondary-text': COLORS.secondary.text,
  
  '--color-accent-blue': COLORS.accent.blue,
  '--color-accent-green': COLORS.accent.green,
  '--color-accent-red': COLORS.accent.red,
  '--color-accent-yellow': COLORS.accent.yellow,
  '--color-accent-purple': COLORS.accent.purple,
  
  '--color-success': COLORS.success.main,
  '--color-error': COLORS.error.main,
  '--color-warning': COLORS.warning.main,
  '--color-info': COLORS.info.main,
  
  '--color-background': COLORS.background.primary,
  '--color-background-secondary': COLORS.background.secondary,
  '--color-text-primary': COLORS.text.primary,
  '--color-text-secondary': COLORS.text.secondary,
} as const;

// Tailwind CSS color configuration
export const TAILWIND_COLORS = {
  // Brand Colors
  brand: {
    primary: COLORS.brand.primary,
    white: COLORS.brand.white,
    black: COLORS.brand.black,
  },
  
  // Primary Colors
  primary: {
    50: COLORS.primary.light,
    100: COLORS.primary.light,
    500: COLORS.primary.main,
    600: COLORS.primary.dark,
    700: COLORS.primary.dark,
  },
  secondary: {
    50: COLORS.secondary.light,
    100: COLORS.secondary.light,
    500: COLORS.secondary.main,
    600: COLORS.secondary.dark,
    700: COLORS.secondary.dark,
  },
} as const;
