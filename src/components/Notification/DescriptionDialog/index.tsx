import React, {useEffect, useRef} from 'react';
import {AnnouncementData} from "../../../data/types/Announcement.ts";

interface Props {
    selectedAnnouncement: AnnouncementData
    setSelectedAnnouncement: (value: AnnouncementData | null) => void,
    panelPosition: {
        top: number,
        left: number,
    }
}
const DescriptionDialog = ({selectedAnnouncement, setSelectedAnnouncement, panelPosition} : Props) => {
    const detailPanelRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                detailPanelRef.current &&
                !detailPanelRef.current.contains(event.target)
            ) {
                setSelectedAnnouncement(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div
            ref={detailPanelRef}
            style={{
                top: `${panelPosition.top}px`,
                left: `${panelPosition.left}px`
            }}
            className="fixed z-50 max-w-sm max-h-[50vh] overflow-auto bg-white shadow-xl rounded-lg p-4 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0">
            <div
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{
                    __html: selectedAnnouncement.description,
                }}
                onClick={(event) => event.stopPropagation()}
            />
        </div>
    );
};

export default DescriptionDialog;