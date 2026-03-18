import { useEffect, useMemo, useState } from 'react';
import {
    PRO_OFFER_TIMER_COOKIE,
    PRO_OFFER_TIMER_COOKIE_DAYS,
    PRO_OFFER_TIMER_DURATION_MS,
} from '../config';

const getCookieValue = (cookieName: string) => {
    if (typeof document === 'undefined') {
        return null;
    }

    const escapedName = cookieName.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1');
    const match = document.cookie.match(new RegExp(`(?:^|; )${escapedName}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
};

const setCookieValue = (cookieName: string, value: string, days: number) => {
    if (typeof document === 'undefined') {
        return;
    }

    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${cookieName}=${encodeURIComponent(value)}; expires=${expiresAt}; path=/; SameSite=Lax`;
};

const resolveInitialDeadline = () => {
    const cookieValue = getCookieValue(PRO_OFFER_TIMER_COOKIE);
    const parsedValue = cookieValue ? Number(cookieValue) : NaN;

    if (Number.isFinite(parsedValue) && parsedValue > 0) {
        return parsedValue;
    }

    const newDeadline = Date.now() + PRO_OFFER_TIMER_DURATION_MS;
    setCookieValue(PRO_OFFER_TIMER_COOKIE, String(newDeadline), PRO_OFFER_TIMER_COOKIE_DAYS);
    return newDeadline;
};

export const usePersistentOfferTimer = () => {
    const [deadline, setDeadline] = useState<number>(() => resolveInitialDeadline());
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const cookieValue = getCookieValue(PRO_OFFER_TIMER_COOKIE);
        const parsedValue = cookieValue ? Number(cookieValue) : NaN;

        if (Number.isFinite(parsedValue) && parsedValue > 0) {
            setDeadline(parsedValue);
        }
    }, []);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setNow(Date.now());
        }, 1000);

        return () => window.clearInterval(interval);
    }, []);

    const timeLeft = useMemo(() => {
        const difference = Math.max(deadline - now, 0);

        return {
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            totalMs: difference,
        };
    }, [deadline, now]);

    return {
        deadline,
        timeLeft,
        hasExpired: timeLeft.totalMs <= 0,
    };
};