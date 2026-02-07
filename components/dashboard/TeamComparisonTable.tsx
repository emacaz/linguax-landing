
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from './types';

const mockData: TeamMember[] = [
  { id: 1, name: 'Regulatory Affairs', team: 'Pharma', brs: 92, confidence: 'green', practiceHours: 120 },
  { id: 2, name: 'M&A Advisory', team: 'Finance', brs: 85, confidence: 'green', practiceHours: 95 },
  { id: 3, name: 'Product Marketing', team: 'Tech', brs: 78, confidence: 'yellow', practiceHours: 110 },
  { id: 4, name: 'Clinical Trials Unit', team: 'Pharma', brs: 68, confidence: 'red', practiceHours: 80 },
];

const TeamComparisonTable: React.FC = () => {
    const { t } = useTranslation();

    const getConfidenceIndicator = (confidence: 'red' | 'yellow' | 'green') => {
        const color = confidence === 'green' ? 'bg-green-500' : confidence === 'yellow' ? 'bg-yellow-500' : 'bg-red-500';
        return <div className={`w-3 h-3 rounded-full ${color}`}></div>;
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs text-gray-400 uppercase bg-[#0F0F1A]">
                    <tr>
                        <th scope="col" className="px-6 py-3">{t('dashboard.table.team')}</th>
                        <th scope="col" className="px-6 py-3 text-center">{t('dashboard.table.brs')}</th>
                        <th scope="col" className="px-6 py-3 text-center">{t('dashboard.table.confidence')}</th>
                        <th scope="col" className="px-6 py-3 text-right">{t('dashboard.table.practiceHours')}</th>
                    </tr>
                </thead>
                <tbody>
                    {mockData.map((member) => (
                        <tr key={member.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                {member.name}
                            </th>
                            <td className="px-6 py-4 text-center">{member.brs}%</td>
                            <td className="px-6 py-4 flex justify-center items-center">
                                {getConfidenceIndicator(member.confidence)}
                            </td>
                            <td className="px-6 py-4 text-right">{member.practiceHours}h</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamComparisonTable;
