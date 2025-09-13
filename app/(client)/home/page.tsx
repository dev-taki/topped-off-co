'use client';

import { useEffect } from 'react';
import { Plus, Calendar, CreditCard, Users, Home, Gift, User, Clock } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useRouter } from 'next/navigation';
import { fetchUserSubscriptions } from '../../store/slices/subscriptionSlice';
import { AuthService } from '../../services/authService';
import { Logo } from '../../components/Logo';

export default function HomePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { userSubscriptions, loading: subscriptionsLoading } = useAppSelector((state) => state.subscription);

  const BUSINESS_ID = 'a6739f04-8b60-4f6d-bae8-a705f8e79dbe';

  useEffect(() => {
    // Check authentication first
    const token = AuthService.getAuthToken();
    if (!token) {
      router.push('/login');
      return;
    }

    dispatch(fetchUserSubscriptions(BUSINESS_ID));
  }, [dispatch, router]);



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full Width Welcome Banner */}
      <div className="w-full p-6 text-brand-white relative overflow-hidden animate-gradient-flow rounded-b-3xl border-b-4 border-brand-white">
        {/* Animated Floral Watermark Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 animate-float-slow">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-spin-slow">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute top-8 right-8 w-12 h-12 animate-float-medium">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-pulse">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute bottom-6 left-12 w-10 h-10 animate-float-fast">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-bounce-slow">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute bottom-8 right-6 w-14 h-14 animate-float-slow">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-spin-reverse">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 animate-float-medium">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-spin-slow">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 animate-float-fast">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full animate-pulse">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-md mx-auto text-center relative z-10">
          <div className="mb-4">
            <Logo variant="default" color="white" size="lg" className="mb-4" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome Back, {user?.name || 'Adventurer'}!</h1>
          <p className="text-gray-200">Ready to continue your adventure?</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-6 pb-24">

        {/* Active Subscriptions */}
        {userSubscriptions && userSubscriptions.length > 0 && (
          <div className="bg-brand-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
            <h2 className="text-lg font-semibold text-brand-black mb-4">Your Active Subscriptions</h2>
            <div className="space-y-4">
              {userSubscriptions
                .filter(sub => sub.status === 'ACTIVE')
                .map((subscription) => (
                  <div key={subscription.id} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-800">Active Subscription</h3>
                          <p className="text-sm text-green-600">Started {new Date(subscription.start_date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium">
                        ACTIVE
                      </span>
                    </div>
                    
                    {/* Credits Display */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-brand-white rounded-lg p-3 border border-green-200">
                        <div className="flex items-center space-x-2">
                          <CreditCard className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">Subscriber Credits</span>
                        </div>
                        <div className="text-xl font-bold text-green-600 mt-1">{subscription.available_credit}</div>
                      </div>
                      <div className="bg-brand-white rounded-lg p-3 border border-green-200">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">Guest Credits</span>
                        </div>
                        <div className="text-xl font-bold text-green-600 mt-1">{subscription.gift_credit}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            onClick={() => router.push('/redeem')}
            className="bg-brand-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full text-left"
          >
            <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-3">
              <Plus className="h-6 w-6 text-brand-white" />
            </div>
            <h3 className="font-semibold text-brand-black mb-1">New Quest</h3>
            <p className="text-sm text-brand-primary">Start a new adventure</p>
          </button>
          
          <button 
            onClick={() => router.push('/plans')}
            className="bg-brand-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full text-left"
          >
            <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-brand-white" />
            </div>
            <h3 className="font-semibold text-brand-black mb-1">Available Plans</h3>
            <p className="text-sm text-brand-primary">View subscription plans</p>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-brand-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-brand-primary mb-1">
              {userSubscriptions ? userSubscriptions.reduce((total, sub) => total + sub.available_credit + sub.gift_credit, 0) : 0}
            </div>
            <div className="text-xs text-brand-primary">Total Credits</div>
          </div>
          <div className="bg-brand-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-brand-primary mb-1">
              {userSubscriptions ? userSubscriptions.reduce((total, sub) => total + sub.available_credit, 0) : 0}
            </div>
            <div className="text-xs text-brand-primary">Subscriber Credits</div>
          </div>
          <div className="bg-brand-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-brand-primary mb-1">
              {userSubscriptions ? userSubscriptions.reduce((total, sub) => total + sub.gift_credit, 0) : 0}
            </div>
            <div className="text-xs text-brand-primary">Guest Credits</div>
          </div>
        </div>
      </div>

    </div>
  );
}
