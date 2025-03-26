import { User } from '../data/types/Rewards';

export const fetchRewardsData = async (): Promise<User[]> => {
    try {
        const response = await fetch('/api/dummy.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error('Error fetching rewards data:', error);
        throw error;
    }
};