import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onOpenModal: () => void;
    onScrollToPricing: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal, onScrollToPricing }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center">
                    <Link to="/" className="cursor-pointer">
                        <span className="text-3xl font-extrabold tracking-tight text-white">
                            Lingua<span className="text-violet-500">X</span>-Ai
                        </span>
                    </Link>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1 border border-gray-700 rounded-lg p-1">
                        {/* <div className="hidden md:flex items-center space-x-1 border border-gray-700 rounded-lg p-1"> */}
                            <button
                                onClick={() => changeLanguage('es')}
                                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200 ${i18n.language.startsWith('es') ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                ES
                            </button>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors duration-200 ${i18n.language.startsWith('en') ? 'bg-violet-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                EN
                            </button>
                        </div>
                        {/* <Link
                            to="/pro"
                            className="text-sm text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-300"
                        >
                            {t('header.forProfessionals')}
                        </Link> */}
                        <button
                            onClick={onScrollToPricing}
                            className="hidden sm:inline-block text-sm text-gray-400 hover:text-white font-semibold transition-colors duration-300"
                        >
                            {t('header.pricing')}
                        </button>
                        <a
                            href="https://linguax-ai.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-white font-semibold transition-colors duration-300"
                        >
                            {t('header.login')}
                        </a>
                        <button
                            onClick={onOpenModal}
                            className="hidden sm:inline-block bg-transparent border border-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            {t('header.contact')}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;