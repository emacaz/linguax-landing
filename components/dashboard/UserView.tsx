
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetricCard from './MetricCard';
import GaugeChart from './GaugeChart';
import { MicrophoneIcon } from '../icons';

const UserView: React.FC = () => {
  const { t } = useTranslation();

  const confidenceColor = 'green';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
      {/* Columna Izquierda */}
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MetricCard title={t('dashboard.user.brs.title')}>
                <GaugeChart score={88} />
            </MetricCard>
            <MetricCard title={t('dashboard.user.confidence.title')}>
                 <div className="flex flex-col items-center justify-center h-full">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-${confidenceColor}-500/20`}>
                        <div className={`w-16 h-16 rounded-full bg-${confidenceColor}-500 animate-pulse`}></div>
                    </div>
                    <p className={`mt-4 text-xl font-bold text-${confidenceColor}-400`}>{t('dashboard.user.confidence.ready')}</p>
                </div>
            </MetricCard>
        </div>
        <MetricCard title={t('dashboard.user.vocabulary.title')} fullWidth>
            <div className="space-y-4 p-4">
                {['Compliance', 'Regulatory Submissions', 'Safety Reporting', 'Pharmacovigilance'].map(term => (
                    <div key={term}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-300">{term}</span>
                            <span className="text-sm font-bold text-violet-400">95%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-violet-600 h-2.5 rounded-full" style={{width: '95%'}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </MetricCard>
      </div>

      {/* Columna Derecha */}
      <div className="space-y-6">
        <MetricCard title={t('dashboard.user.roadmap.title')}>
            <ul className="space-y-3 p-4">
                <li className="flex items-start"><span className="text-violet-400 mr-2">✓</span>{t('dashboard.user.roadmap.step1')}</li>
                <li className="flex items-start"><span className="text-violet-400 mr-2">✓</span>{t('dashboard.user.roadmap.step2')}</li>
                <li className="flex items-start"><span className="text-gray-500 mr-2">●</span>{t('dashboard.user.roadmap.step3')}</li>
            </ul>
        </MetricCard>
        <MetricCard title={t('dashboard.user.recordings.title')}>
            <div className="p-4 space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center">
                    <MicrophoneIcon className="w-5 h-5 mr-3 text-violet-400"/> Pitch Q4 Results
                </button>
                 <button className="w-full text-left p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center">
                    <MicrophoneIcon className="w-5 h-5 mr-3 text-violet-400"/> Regulatory Update
                </button>
            </div>
        </MetricCard>
      </div>
       <style>{`
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        `}</style>
    </div>
  );
};

export default UserView;
