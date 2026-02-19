import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('./components/LandingPage'));
const ProPage = lazy(() => import('./components/ProPage'));

const App: React.FC = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen bg-[#05050A] text-white">Loading page...</div>}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pro" element={<ProPage />} />
            </Routes>
        </Suspense>
    );
};

export default App;