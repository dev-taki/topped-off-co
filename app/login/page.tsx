'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth, useAppDispatch } from '../store/hooks';
import { login, clearError } from '../store/slices/authSlice';
import { ButtonLoader } from '../components/common/Loader';
import { ErrorDisplay } from '../components/common/ErrorDisplay';
import { Logo } from '../components/Logo';
import { LoginData } from '../types';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { AuthService } from '../services/authService';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuthenticated, loading, error, user } = useAuth();
  
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check for existing auth token on page load
    const token = AuthService.getAuthToken();
    const role = AuthService.getRole();
    
    if (token) {
          // Check if user has admin role and redirect accordingly
    const isAdmin = role === 'admin' || role === 'super_admin' || role === 'owner';
    
    if (isAdmin) {
      router.push('/admin/dashboard');
    } else {
      router.push('/home');
    }
      return;
    }

    // If authenticated through Redux state, redirect accordingly
    if (isAuthenticated && user) {
      const isAdmin = user.role === 'admin' || user.role === 'super_admin' || user.role === 'owner';
      
      if (isAdmin) {
        router.push('/admin/dashboard');
      } else {
        router.push('/home');
      }
    }
  }, [isAuthenticated, user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(login(formData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-brand-white flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <Logo variant="default" showTagline={true} />
        </div>
        
        <ErrorDisplay error={error} onClear={handleClearError} className="mb-6" />
        
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-montserrat font-medium text-brand-black mb-3 uppercase tracking-wide">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-brand-primary" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-4 bg-brand-white border border-brand-primary rounded-xl focus:outline-none focus:ring-0 focus:border-brand-black transition-colors font-montserrat"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <label htmlFor="password" className="block text-sm font-montserrat font-medium text-brand-black mb-3 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-brand-primary" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-12 py-4 bg-brand-white border border-brand-primary rounded-xl focus:outline-none focus:ring-0 focus:border-brand-black transition-colors font-montserrat"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-brand-primary" />
                ) : (
                  <Eye className="h-5 w-5 text-brand-primary" />
                )}
              </button>
            </div>
            <p className="mt-2 text-sm text-brand-primary font-montserrat">
              Password must be at least 8 characters with letters
            </p>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg text-sm font-montserrat font-medium text-brand-white bg-brand-black hover:bg-brand-primary focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
          >
            {loading ? <ButtonLoader size="sm" /> : 'Sign In'}
          </button>
        </form>



        {/* Sign up link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-brand-primary font-montserrat">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-brand-primary hover:text-brand-black font-montserrat"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
