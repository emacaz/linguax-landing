
import React from 'react';
import { useTranslation } from 'react-i18next';
import MetricCard from './MetricCard';
import TeamComparisonTable from './TeamComparisonTable';
import LineChart from './LineChart';

const ManagerView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title={t('dashboard.manager.brs.title')} 
          value="82%" 
          change="+5%" 
          changeType="increase"
        />
        <MetricCard 
          title={t('dashboard.manager.practiceTime.title')} 
          value="1,240h" 
          change="+120h" 
          changeType="increase"
        />
        <MetricCard 
          title={t('dashboard.manager.costSavings.title')} 
          value="$18,600"
          change={t('dashboard.manager.costSavings.change')}
        />
        <MetricCard 
          title={t('dashboard.manager.activeUsers.title')} 
          value="45/50"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <MetricCard title={t('dashboard.manager.teamPerformance.title')} fullWidth>
            <TeamComparisonTable />
          </MetricCard>
        </div>
        <div className="lg:col-span-2">
            <MetricCard title={t('dashboard.manager.hesitationAnalysis.title')} fullWidth>
              <LineChart />
            </MetricCard>
        </div>
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

export default ManagerView;
