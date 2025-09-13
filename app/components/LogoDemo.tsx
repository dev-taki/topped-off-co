import React from 'react';
import { Logo } from './Logo';

export const LogoDemo: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Logo Component Demo</h1>
      
      {/* Default Variants */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Default Variant</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Default Color</h3>
            <Logo variant="default" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">White Color</h3>
            <div className="bg-gray-900 p-4 rounded">
              <Logo variant="default" color="white" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Primary Color</h3>
            <Logo variant="default" color="primary" />
          </div>
        </div>
      </div>

      {/* Size Variants */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Size Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Small</h3>
            <Logo size="sm" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Medium</h3>
            <Logo size="md" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Large</h3>
            <Logo size="lg" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Extra Large</h3>
            <Logo size="xl" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">2X Large</h3>
            <Logo size="2xl" />
          </div>
        </div>
      </div>

      {/* With Tagline */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">With Tagline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Default with Tagline</h3>
            <Logo showTagline={true} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">White with Tagline</h3>
            <div className="bg-gray-900 p-4 rounded">
              <Logo color="white" showTagline={true} />
            </div>
          </div>
        </div>
      </div>

      {/* All Variants */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Default</h3>
            <Logo variant="default" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Minimal</h3>
            <Logo variant="minimal" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg font-medium mb-4">Stacked</h3>
            <Logo variant="stacked" />
          </div>
        </div>
      </div>

      {/* Custom Styling */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Custom Styling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg text-center">
            <h3 className="text-lg font-medium mb-4 text-white">Gradient Background</h3>
            <Logo color="white" size="xl" showTagline={true} />
          </div>
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h3 className="text-lg font-medium mb-4 text-white">Dark Background</h3>
            <Logo color="white" size="lg" variant="minimal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDemo;
