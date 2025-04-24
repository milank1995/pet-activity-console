import {AnnouncementData} from "../data/types/Announcement.ts";

export const fetchAnnouncementData = async (): Promise<AnnouncementData[]> => {
    try {
        const response = await fetch('/api/dummy.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.announcements;
    } catch (error) {
        console.error('Error fetching rewards data:', error);
        throw error;
    }
};

export const fetchNotificationData = async (): Promise<AnnouncementData[]> => {
    try {
        const response = await fetch('/api/dummy.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.notifications;
    } catch (error) {
        console.error('Error fetching rewards data:', error);
        throw error;
    }
};