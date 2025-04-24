import React, {useRef, useState} from 'react';
import {Popover, PopoverButton, PopoverPanel, Transition, TransitionChild, Dialog, DialogPanel} from "@headlessui/react";
import {BellIcon} from "../../assets/Icons.tsx";
import {AnnouncementData} from "../../data/types/Announcement.ts";
import DescriptionDialog from "./DescriptionDialog";
import {useNotificationState} from "../../hooks/Notification/useNotificationState.ts"
import {useNavigate} from "react-router-dom";
import {routeConstants} from "../../router/routeConstants.ts";
const Notification = () => {
    const { notificationList } = useNotificationState()
    // const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementData | null>(null);
    // const [panelPosition, setPanelPosition] = useState({ top: 0, left: 0 });
    const clickedItemRef = useRef(null);
    const navigate = useNavigate()
    const handleItemClick = (closeFn: Function) => {
        navigate(routeConstants.notifications)
        closeFn()
        // setSelectedAnnouncement(announcement);
    };

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        console.log('rect', rect)
        // setPanelPosition({
        //     top: rect.top + window.scrollY,
        //     left: rect.left - rect.width - 100 // 10px space between item and panel
        // });
    };

    return (
        <>
            <Popover>
                <PopoverButton className="block text-sm/6 font-semibold text-black/50 focus:outline-none data-active:text-black data-focus:outline data-focus:outline-white data-hover:text-black">
                    <div className="header-box">
                        <BellIcon />
                    </div>
                </PopoverButton>
                <PopoverPanel
                    transition
                    anchor="bottom"
                    style={{ transform: "translateX(-30px)"}}
                    ref={clickedItemRef}
                    onClick={(e) => handleClick(e)}
                    className="!fixed z-50 overflow-y-auto no-scrollbar shadow-lg divide-y !min-w-[22rem] !max-w-sm !max-h-[50vh] mt-2 rounded-xl text-dark-gray bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                >
                    {
                        ({close}) => (
                            <div className="w-full h-full overflow-auto">
                                {
                                    notificationList.map((announcement) => (
                                        <div key={announcement.id} className={`p-3 border-b border-light-gray ${announcement.read?'bg-white':'bg-light-blue'}`}
                                             onClick={() => handleItemClick(close)}>
                                            <div className="text-sm font-semibold">
                                                {announcement.title} - {announcement.type} - {announcement.created}
                                            </div>
                                            <div className="flex gap-2 text-center text-xs font-semibold mt-2">
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

                                <div className="p-3 border-b border-light-gray">
                                    <div className="text-sm font-semibold text-purple-900">
                                        Subject1 - Type - 11/04/2025
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
                                        <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80">
                                            Mark as Read
                                        </button>
                                        <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80 w-max">
                                            Mark as Completed
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </PopoverPanel>
            </Popover>
            {/*{*/}
            {/*    selectedAnnouncement &&*/}
            {/*    <DescriptionDialog*/}
            {/*        selectedAnnouncement={selectedAnnouncement}*/}
            {/*        setSelectedAnnouncement={setSelectedAnnouncement}*/}
            {/*        panelPosition={panelPosition}*/}
            {/*    />*/}
            {/*}*/}
        </>

    );
};

export default Notification;