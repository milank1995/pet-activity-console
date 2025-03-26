import { RewardStar, User } from '../data/types/Rewards';

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

export const fetchUserById = async (id: number): Promise<User | null> => {
    try {
        const response = await fetch('/api/dummy.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const user = data.users.find((user: User) => user.id === Number(id));
        return user || null;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const fetchStarsData = async (): Promise<RewardStar[]> => {
    try {
        const response = await fetch('/api/dummy.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.stars;
    } catch (error) {
        console.error('Error fetching rewards data:', error);
        throw error;
    }
};