
import React from 'react';

interface MetricCardProps {
  title: string;
  value?: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  children?: React.ReactNode;
  fullWidth?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, changeType, children, fullWidth }) => {
  const changeColor = changeType === 'increase' ? 'text-green-400' : 'text-red-400';
  const changeIcon = changeType === 'increase' ? '▲' : '▼';

  return (
    <div className={`bg-[#0A0A12]/80 border border-gray-800 rounded-2xl shadow-lg shadow-violet-900/10 ${fullWidth ? 'w-full' : ''}`}>
      <div className="p-4 border-b border-gray-800">
        <h3 className="text-base font-semibold text-gray-300">{title}</h3>
      </div>
      <div className="p-2 sm:p-4 h-full">
        {value && (
            <div className="p-2">
                <p className="text-4xl font-bold text-white">{value}</p>
                {change && (
                    <p className={`mt-1 text-sm font-semibold ${changeColor}`}>
                    {changeIcon} {change}
                    </p>
                )}
            </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default MetricCard;
