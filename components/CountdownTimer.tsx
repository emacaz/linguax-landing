import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface CountdownTimerProps {
    expiryTimestamp: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiryTimestamp }) => {
    const { t } = useTranslation();
    const calculateTimeLeft = () => {
        const difference = +new Date(expiryTimestamp) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: React.ReactElement[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        // @ts-ignore
        timerComponents.push(
            <div key={interval} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-mono font-bold text-white">
                    {String(timeLeft[interval]).padStart(2, '0')}
                </span>
                <span className="text-xs text-gray-400 uppercase">{interval}</span>
            </div>
        );
    });

    return (
        <div className="flex items-center justify-center space-x-4">
            {timerComponents.length ? timerComponents : <span>Oferta Terminada!</span>}
        </div>
    );
};

export default CountdownTimer;