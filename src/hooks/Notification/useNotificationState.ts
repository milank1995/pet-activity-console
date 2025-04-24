import React, {useEffect} from "react";
import {AnnouncementData} from "../../data/types/Announcement.ts";
import {fetchNotificationData} from "../../services/annoucementApi.ts";

export const useNotificationState = () => {
    const [notificationList, setNotificationList] = React.useState<AnnouncementData[]>([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchNotificationData();
                setNotificationList(data);
            } catch (err) {
                setNotificationList([])
            }
        };

        loadData();
    }, []);
    return { notificationList }
}