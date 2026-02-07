
import React from 'react';

interface GaugeChartProps {
  score: number; // 0 to 100
}

const GaugeChart: React.FC<GaugeChartProps> = ({ score }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const scoreColor = score >= 80 ? 'text-green-400' : score >= 60 ? 'text-yellow-400' : 'text-red-400';
  const strokeColor = score >= 80 ? '#4ade80' : score >= 60 ? '#facc15' : '#f87171';

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative">
        <svg className="transform -rotate-90" width="160" height="160" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#374151" // gray-700
            strokeWidth="12"
            fill="transparent"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={strokeColor}
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${scoreColor}`}>{score}%</span>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
