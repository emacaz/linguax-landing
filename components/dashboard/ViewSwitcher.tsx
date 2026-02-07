
import React from 'react';
import { useTranslation } from 'react-i18next';

type ViewType = 'user' | 'manager';

interface ViewSwitcherProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ currentView, setCurrentView }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex justify-center">
      <div className="flex items-center space-x-1 border border-gray-700 rounded-lg p-1 bg-[#0A0A12]">
        <button
          onClick={() => setCurrentView('user')}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            currentView === 'user'
              ? 'bg-violet-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {t('dashboard.userView')}
        </button>
        <button
          onClick={() => setCurrentView('manager')}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
            currentView === 'manager'
              ? 'bg-violet-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {t('dashboard.managerView')}
        </button>
      </div>
    </div>
  );
};

export default ViewSwitcher;
