import React from 'react';
import {useNotificationState} from "../../hooks/Notification/useNotificationState.ts";

const NotificationList = () => {
    const { notificationList } = useNotificationState()
    return (
        <div className="bg-white w-full h-full rounded-[0.625rem] p-5 overflow-auto">
            {
                notificationList.map((announcement) => (
                    <div key={announcement.id} className={`p-3 border-b border-light-gray `}>
                        <div className="text-sm font-semibold">
                            {announcement.title} - {announcement.type} - {announcement.created}
                        </div>
                        <div
                            className="text-sm text-gray-600 mt-4"
                            dangerouslySetInnerHTML={{
                                __html: announcement.description,
                            }}
                            onClick={(event) => event.stopPropagation()}
                        />
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
    );
};

export default NotificationList;