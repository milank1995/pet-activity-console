import React, {useState} from 'react';
import {useNotificationState} from "../../hooks/Notification/useNotificationState.ts";
import {AnnouncementData} from "../../data/types/Announcement.ts";

const NotificationList = () => {
    const { notificationList } = useNotificationState()
    const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementData | null>(null);

    const handleSelect = (announcement: AnnouncementData) => (
        setSelectedAnnouncement(announcement)
    )
    return (
        <div className="h-full grid grid-cols-2 gap-x-1">
            <div className="bg-white w-full h-full rounded overflow-auto col-span-1 no-scrollbar">
                {
                    notificationList.map((announcement) => (
                        <div key={announcement.id} className={`p-5 border-b border-light-gray ${announcement.read?'bg-white':'bg-light-blue'}`} onClick={() => handleSelect(announcement)}>
                            <div className="text-sm font-semibold">
                                {announcement.title} - {announcement.type} - {announcement.created}
                            </div>
                            <div className="flex gap-2 text-center text-xs font-semibold mt-4">
                                <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80 w-max" onClick={(event) => event.stopPropagation()}>
                                    Mark as Read
                                </button>
                                <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80 w-max" onClick={(event) => event.stopPropagation()}>
                                    Mark as Completed
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bg-white w-full h-full rounded p-5 overflow-auto col-span-1">
                {
                    selectedAnnouncement ? (
                        <div className="text-dark-gray flex flex-col gap-4">
                            <div className="flex items-start gap-6">
                                <p className="font-semibold">Title :</p>
                                {selectedAnnouncement.title}
                            </div>
                            <div className="flex items-start gap-6">
                                <p className="font-semibold">Custom Type :</p>
                                {selectedAnnouncement.type}
                            </div>
                            <div className="flex items-start gap-6">
                                <p className="font-semibold">Created Date :</p>
                                {selectedAnnouncement.created}
                            </div>
                            <div className="flex items-start gap-6">
                                <p className=" font-semibold">Description :</p>
                                <div
                                    className="flex-1"
                                    dangerouslySetInnerHTML={{
                                        __html: selectedAnnouncement.description,
                                    }}
                                    onClick={(event) => event.stopPropagation()}
                                />
                            </div>
                            <div className="flex gap-2 text-center text-sm font-semibold mt-4">
                                <button className="bg-green text-white py-2 px-2.5 rounded hover:bg-opacity-80 w-max">
                                    Mark as Read
                                </button>
                                <button className="bg-green text-white py-2 px-2.5 rounded hover:bg-opacity-80 w-max">
                                    Mark as Completed
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            No notifications selected
                        </div>
                    )
                }

            </div>
        </div>

    );
};

export default NotificationList;