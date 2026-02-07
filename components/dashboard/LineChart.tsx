
import React from 'react';

const LineChart: React.FC = () => {
    // Mock data for the line chart
    const data = [
        { month: 'Jan', value: 30 },
        { month: 'Feb', value: 25 },
        { month: 'Mar', value: 22 },
        { month: 'Apr', value: 18 },
        { month: 'May', value: 15 },
        { month: 'Jun', value: 12 },
    ];

    const width = 300;
    const height = 150;
    const padding = 20;

    const xScale = (index: number) => (index / (data.length - 1)) * (width - 2 * padding) + padding;
    const yScale = (value: number) => height - padding - ((value / 40) * (height - 2 * padding));

    const path = data.map((point, index) => {
        const x = xScale(index);
        const y = yScale(point.value);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return (
        <div className="p-4">
            <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="auto">
                <path d={path} fill="none" stroke="#8B5CF6" strokeWidth="2" />
                {data.map((point, index) => (
                    <circle key={index} cx={xScale(index)} cy={yScale(point.value)} r="3" fill="#8B5CF6" />
                ))}
                <path d={`M ${padding} ${height - padding} L ${width - padding} ${height - padding}`} stroke="#4B5563" strokeWidth="1" />
                <path d={`M ${padding} ${padding} L ${padding} ${height - padding}`} stroke="#4B5563" strokeWidth="1" />

                 {data.map((point, index) => (
                    <text key={index} x={xScale(index)} y={height - 5} fontSize="10" fill="#9CA3AF" textAnchor="middle">
                        {point.month}
                    </text>
                ))}
            </svg>
        </div>
    );
};

export default LineChart;
