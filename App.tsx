import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('./components/LandingPage'));
const ProPage = lazy(() => import('./components/ProPage'));
const ProOnboardingPage = lazy(() => import('./components/pro/onboarding/ProOnboardingPage'));
const SpringPage = lazy(() => import('./components/SpringPage'));
const RefundPolicyEN = lazy(() => import('./components/RefundPolicyEN'));
const RefundPolicyES = lazy(() => import('./components/RefundPolicyES'));

const App: React.FC = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen bg-[#05050A] text-white">Loading page...</div>}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pro" element={<ProPage />} />
                <Route path="/pro/onboarding" element={<ProOnboardingPage />} />
                <Route path="/spring" element={<SpringPage />} />
                <Route path="/refund-policy-en" element={<RefundPolicyEN />} />
                <Route path="/refund-policy-es" element={<RefundPolicyES />} />
                
            </Routes>
        </Suspense>
    );
};

export default App;