
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface TrialModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [gdprChecked, setGdprChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'exists' | 'error'>('idle');

    useEffect(() => {
        if (isOpen) {
            setEmail('');
            setGdprChecked(false);
            setSubmitStatus('idle');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!gdprChecked || isLoading) return;
        setIsLoading(true);
        setSubmitStatus('idle');
        try {
            const res = await fetch(import.meta.env.VITE_CF_CREATE_TRIAL_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, lang: i18n.language }),
            });
            if (res.status === 409) { setSubmitStatus('exists'); return; }
            if (!res.ok) { setSubmitStatus('error'); return; }
            setSubmitStatus('success');
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-[#0F0F1A] border border-gray-800 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    aria-label={t('hero.emailModal.closeAria')}
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold text-white mb-6">
                    {t('hero.emailModal.title')}
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('hero.emailModal.placeholder')}
                        required
                        autoFocus
                        className="w-full bg-[#05050A] border border-gray-700 text-white rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                    <label className="flex items-start gap-2 text-sm text-gray-400 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={gdprChecked}
                            onChange={(e) => setGdprChecked(e.target.checked)}
                            className="mt-0.5 accent-violet-500"
                        />
                        <span>
                            {t('hero.emailModal.gdprLabel')}{' '}
                            <a
                                href={i18n.language.startsWith('es') ? '/privacy-policy-es' : '/privacy-policy-en'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-violet-400 hover:underline"
                            >
                                {t('hero.emailModal.gdprLinkText')}
                            </a>.
                        </span>
                    </label>
                    <button
                        type="submit"
                        disabled={!gdprChecked || isLoading}
                        className="w-full bg-violet-600 text-white font-semibold py-3 rounded-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-600/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? t('hero.emailModal.submitting') : t('hero.emailModal.submit')}
                    </button>
                    {submitStatus === 'success' && (
                        <p className="text-green-400 text-sm text-center mt-2">
                            {t('hero.emailModal.success')}
                        </p>
                    )}
                    {submitStatus === 'exists' && (
                        <p className="text-yellow-400 text-sm text-center mt-2">
                            {t('hero.emailModal.existsMessage')}{' '}
                            <a href="https://app.linguax-ai.com" className="underline">{t('hero.emailModal.existsLink')}</a>
                        </p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-400 text-sm text-center mt-2">
                            {t('hero.emailModal.errorMessage')}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default TrialModal;
