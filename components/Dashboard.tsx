
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from './dashboard/types';
import WelcomeHeader from './dashboard/WelcomeHeader';
import ViewSwitcher from './dashboard/ViewSwitcher';
import UserView from './dashboard/UserView';
import ManagerView from './dashboard/ManagerView';

interface DashboardProps {
    user: User;
    onLogout: () => void;
}

type ViewType = 'user' | 'manager';

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
    const { t } = useTranslation();
    const [currentView, setCurrentView] = useState<ViewType>(user.role);

    return (
        <div className="bg-[#05050A] text-white min-h-screen">
            <header className="bg-[#0A0A12]/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="cursor-pointer" onClick={onLogout}>
                            <span className="text-3xl font-extrabold tracking-tight text-white">
                                Lingua<span className="text-violet-500">X</span>-Ai
                            </span>
                        </div>
                        <div>
                             <button
                                onClick={onLogout}
                                className="text-sm text-gray-400 hover:text-white font-semibold transition-colors duration-300"
                            >
                                {t('dashboard.logout')}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <WelcomeHeader user={user} />
                {user.role === 'manager' && (
                    <ViewSwitcher 
                        currentView={currentView} 
                        setCurrentView={setCurrentView} 
                    />
                )}
                
                <div className="mt-8">
                    {currentView === 'user' ? <UserView /> : <ManagerView />}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
