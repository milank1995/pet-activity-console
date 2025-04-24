import React from 'react';
import DataTable from "../DataTable";
import {useAnnouncementState} from "../../hooks/Announcement/useAnnouncementState.ts";
import {announcementTableColumns} from "./components/AnnouncementTableColumns.tsx";

const AnnouncementPage = () => {
    const {announcementList} = useAnnouncementState()
    return (
        <div className="bg-white w-full h-full rounded-[0.625rem]">
            <DataTable
                columns={announcementTableColumns}
                bodyData={announcementList}
                bodyRowClassName="!h-[3.125rem]"
            />
        </div>
    );
};

export default AnnouncementPage;