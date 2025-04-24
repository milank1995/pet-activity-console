import React, {useEffect} from "react";
import {AnnouncementData} from "../../data/types/Announcement.ts";
import {fetchAnnouncementData} from "../../services/annoucementApi.ts";

export const useAnnouncementState = () => {
    const [announcementList, setAnnouncementList] = React.useState<AnnouncementData[]>([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchAnnouncementData();
                setAnnouncementList(data);
            } catch (err) {
                setAnnouncementList([])
            }
        };

        loadData();
    }, []);
    return { announcementList }
}