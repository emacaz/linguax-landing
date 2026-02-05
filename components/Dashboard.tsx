
import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { CheckIcon, SpinnerIcon } from './icons';

interface DashboardProps {
    onShowLanding: () => void;
}

const StatusLine: React.FC<{ text: React.ReactNode; status: 'completed' | 'inProgress' | 'pending'; delay: number }> = ({ text, status, delay }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const getStatusLabel = () => {
        switch (status) {
            case 'completed': return t('dashboard.status.completed');
            case 'inProgress': return t('dashboard.status.inProgress');
            case 'pending': return t('dashboard.status.pending');
        }
    };

    const getStatusColor = () => {
        switch (status) {
            case 'completed': return 'text-green-400';
            case 'inProgress': return 'text-violet-400';
            case 'pending': return 'text-gray-500';
        }
    };

    if (!isVisible) {
        return <div className="h-7" />; // Placeholder for smooth animation
    }
    
    return (
        <div className="flex items-center space-x-3 animate-fade-in">
            {status === 'completed' && <CheckIcon className="w-5 h-5 text-green-400" />}
            {status === 'inProgress' && <SpinnerIcon className="w-5 h-5 text-violet-400" />}
            {status === 'pending' && <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>}
            <span className="flex-grow text-gray-300">{text}</span>
            <span className={`text-sm font-semibold ${getStatusColor()}`}>{getStatusLabel()}</span>
        </div>
    );
}

const Dashboard: React.FC<DashboardProps> = ({ onShowLanding }) => {
    const { t } = useTranslation();
    const [statuses, setStatuses] = useState<('completed' | 'inProgress' | 'pending')[]>(['inProgress', 'pending', 'pending', 'pending', 'pending']);
    
    const companyName = "Cresia Consulting S.L.";

    const tasks = useMemo(() => [
        t('dashboard.status.profile'),
        <Trans i18nKey="dashboard.status.workspace">
            Espacio de trabajo para <span className="font-semibold text-gray-100">{companyName}</span> configurado.
        </Trans>,
        t('dashboard.status.calibrating'),
        t('dashboard.status.analyzing'),
        t('dashboard.status.generating')
    ], [t, companyName]);

    useEffect(() => {
        const timeouts: number[] = [];
        const updateStatus = (index: number) => {
            timeouts.push(window.setTimeout(() => {
                setStatuses(prev => {
                    const newStatuses = [...prev];
                    if (index > 0) newStatuses[index - 1] = 'completed';
                    if (index < tasks.length) newStatuses[index] = 'inProgress';
                    return newStatuses;
                });

                if(index < tasks.length) {
                    updateStatus(index + 1);
                }
            }, 2000 + Math.random() * 1000));
        };
        
        updateStatus(0);

        return () => timeouts.forEach(clearTimeout);
    }, [tasks.length]);

    return (
        <div className="bg-[#05050A] text-white min-h-screen flex flex-col">
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
            `}</style>
            <header className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="cursor-pointer" onClick={onShowLanding}>
                        <span className="text-3xl font-extrabold tracking-tight text-white">
                            Lingua<span className="text-violet-500">X</span>-Ai
                        </span>
                    </div>
                </div>
            </header>
            <main className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-2xl text-center">
                    <h1 className="text-3xl font-bold text-white">
                         <Trans i18nKey="dashboard.welcome">
                            Hola, Luzmila. Estamos preparando el entorno LinguaX para <span className="text-violet-400">{companyName}</span>
                         </Trans>
                    </h1>
                    <p className="mt-2 text-lg text-gray-400">{t('dashboard.title')}</p>
                    
                    <div className="bg-[#0A0A12] border border-gray-800 rounded-2xl shadow-2xl shadow-violet-900/20 p-8 mt-8 text-left space-y-4">
                        {tasks.map((task, index) => (
                           <StatusLine key={index} text={task} status={statuses[index]} delay={index * 200} />
                        ))}
                    </div>

                    <div className="mt-8 max-w-xl mx-auto">
                        <p className="text-gray-500">{t('dashboard.info')}</p>
                        <p className="mt-2 text-gray-400 font-semibold">{t('dashboard.nextSteps')}</p>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={onShowLanding}
                            className="bg-transparent border border-gray-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            {t('dashboard.cta')}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
