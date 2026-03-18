import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const sceneKeys = ['meetings', 'interviews', 'negotiations'] as const;

const PracticeSimulatorDemo: React.FC = () => {
    const { t } = useTranslation();
    const [activeSceneIndex, setActiveSceneIndex] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveSceneIndex((currentIndex) => (currentIndex + 1) % sceneKeys.length);
        }, 2600);

        return () => window.clearInterval(interval);
    }, []);

    const activeSceneKey = sceneKeys[activeSceneIndex];

    return (
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
            <div className="space-y-3">
                {sceneKeys.map((sceneKey, index) => {
                    const isActive = activeSceneKey === sceneKey;

                    return (
                        <div
                            key={sceneKey}
                            className={`rounded-2xl border p-5 transition-all duration-500 ${
                                isActive
                                    ? 'border-violet-500 bg-violet-900/20 shadow-lg shadow-violet-900/20'
                                    : 'border-gray-800 bg-[#0A0A12]/60'
                            }`}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                                        0{index + 1}
                                    </p>
                                    <h3 className="mt-1 text-lg font-semibold text-white">
                                        {t(`proOnboarding.bridge.demo.scenes.${sceneKey}.label`)}
                                    </h3>
                                </div>
                                <span
                                    className={`h-2.5 w-2.5 rounded-full ${
                                        isActive ? 'bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.65)]' : 'bg-gray-700'
                                    }`}
                                />
                            </div>
                            <p className="mt-3 text-sm text-gray-400">
                                {t(`proOnboarding.bridge.demo.scenes.${sceneKey}.summary`)}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="rounded-[28px] border border-violet-900/50 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.22),_transparent_55%),linear-gradient(180deg,rgba(15,15,26,0.96),rgba(8,8,16,0.96))] p-6 shadow-2xl shadow-violet-950/30">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                            {t('proOnboarding.bridge.demo.eyebrow')}
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-white">
                            {t(`proOnboarding.bridge.demo.scenes.${activeSceneKey}.headline`)}
                        </h3>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        {t('proOnboarding.bridge.demo.liveLabel')}
                    </div>
                </div>

                <div className="mt-5 grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                            {t('proOnboarding.bridge.demo.userSpeechLabel')}
                        </p>
                        <p className="mt-2 text-base text-gray-200">
                            {t(`proOnboarding.bridge.demo.scenes.${activeSceneKey}.userLine`)}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-violet-200">
                            {t('proOnboarding.bridge.demo.aiCoachLabel')}
                        </p>
                        <p className="mt-2 text-base text-white">
                            {t(`proOnboarding.bridge.demo.scenes.${activeSceneKey}.aiLine`)}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/10 bg-[#11111d] p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                                {t('proOnboarding.bridge.demo.metricsLabel')}
                            </p>
                            <div className="mt-4 space-y-3">
                                {['clarity', 'pacing', 'confidence'].map((metricKey, index) => (
                                    <div key={metricKey}>
                                        <div className="flex items-center justify-between text-sm text-gray-300">
                                            <span>{t(`proOnboarding.bridge.demo.metrics.${metricKey}`)}</span>
                                            <span>{88 + activeSceneIndex * 3 - index}%</span>
                                        </div>
                                        <div className="mt-1 h-2 rounded-full bg-white/10">
                                            <div
                                                className="h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-700"
                                                style={{ width: `${78 + activeSceneIndex * 6 - index * 4}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#11111d] p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                                {t('proOnboarding.bridge.demo.outcomeLabel')}
                            </p>
                            <p className="mt-4 text-white">
                                {t(`proOnboarding.bridge.demo.scenes.${activeSceneKey}.outcome`)}
                            </p>
                            <div className="mt-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                                {t(`proOnboarding.bridge.demo.scenes.${activeSceneKey}.tag`)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeSimulatorDemo;