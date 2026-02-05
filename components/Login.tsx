
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SpinnerIcon } from './icons';

interface LoginProps {
    onShowLanding: () => void;
    onShowDashboard: () => void;
}

const Login: React.FC<LoginProps> = ({ onShowLanding, onShowDashboard }) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;

        setTimeout(() => {
            setIsLoading(false);
            if (email.toLowerCase() === 'lgaray@cresiaconsulting.com') {
                onShowDashboard();
            } else {
                setError(t('login.error'));
            }
        }, 1500);
    };

    return (
        <div className="bg-[#05050A] text-white min-h-screen flex flex-col">
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
                <div className="w-full max-w-md">
                    <div className="bg-[#0A0A12] border border-gray-800 rounded-2xl shadow-2xl shadow-violet-900/20 p-8">
                        <h2 className="text-2xl font-bold text-center text-white mb-6">{t('login.title')}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                                    {t('login.emailLabel')}
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        disabled={isLoading}
                                        className="mt-1 block w-full bg-gray-900/50 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-violet-500 focus:border-violet-500 disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                                        {t('login.passwordLabel')}
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-violet-400 hover:text-violet-300">
                                            {t('login.forgotPassword')}
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        disabled={isLoading}
                                        className="mt-1 block w-full bg-gray-900/50 border border-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-violet-500 focus:border-violet-500 disabled:opacity-50"
                                    />
                                </div>
                            </div>
                            
                            {error && <p className="text-sm text-red-400 text-center">{error}</p>}

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-violet-500 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? <SpinnerIcon /> : t('login.submitButton')}
                                </button>
                            </div>
                        </form>
                    </div>
                     <p className="mt-6 text-center text-sm text-gray-500">
                        {t('login.noAccount')}{' '}
                        <a href="#" className="font-medium text-violet-400 hover:text-violet-300">
                           {t('login.contactSales')}
                        </a>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Login;
