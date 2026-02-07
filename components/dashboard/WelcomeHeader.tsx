
import React from 'react';
import { useTranslation } from 'react-i18next';
import { User } from './types';

interface WelcomeHeaderProps {
  user: User;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ user }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">
        {t('dashboard.welcome', { name: user.name })}
      </h1>
      <p className="mt-1 text-lg text-gray-400">
        {t('dashboard.companyDashboard', { company: user.company })}
      </p>
    </div>
  );
};

export default WelcomeHeader;
