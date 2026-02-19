import { useState, useEffect } from 'react';

export interface OfferStatus {
  isScholarshipVisible: boolean;
  scholarshipSlots: number;
  isLifetimeVisible: boolean;
  lifetimeEndDate: string; // ISO 8601 string
}

export const useProOffers = () => {
  const [offers, setOffers] = useState<OfferStatus | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data from a CMS or backend
    const fetchOfferStatus = () => {
      const now = new Date();
      const endDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now

      const mockData: OfferStatus = {
        isScholarshipVisible: false,
        scholarshipSlots: 10,
        isLifetimeVisible: true,
        lifetimeEndDate: endDate.toISOString(),
      };

      // Simulate network delay
      setTimeout(() => {
        setOffers(mockData);
        setIsLoading(false);
      }, 500);
    };

    fetchOfferStatus();
  }, []);

  return { isLoading, offers };
};