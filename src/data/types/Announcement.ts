
export interface AnnouncementData {
    id: number;
    title: string;
    type: string;
    createdBy: string;
    receiver: string;
    created: string;
    action: string;
    read?: boolean;
    description: string;
};