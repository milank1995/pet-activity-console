import { ColumnDef } from "@tanstack/react-table";
import { DownloadIcon } from "../../../assets/Icons.tsx";
import { statusList } from "../../../constants.ts";
import {AnnouncementData} from "../../../data/types/Announcement.ts";
import React from "react";
export const announcementTableColumns: ColumnDef<AnnouncementData>[] = [
    {
        accessorKey: "title",
        header: "Title",
        size: 200,
        enableSorting: false,
    },
    {
        accessorKey: "type",
        header: "Type",
        size: 150,
        enableSorting: true,
    },
    {
        accessorKey: "createdBy",
        header: "Sender(Created By)",
        size: 200,
        enableSorting: true,
    },
    {
        accessorKey: "receiver",
        header: "Receiver",
        size: 200,
        enableSorting: true,
    },
    {
        accessorKey: "created",
        header: "Created",
        size: 150,
        enableSorting: true,
    },
    {
        accessorKey: "action",
        header: "Action",
        size: 350,
        enableSorting: true,
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({row}) => (
            <div
                dangerouslySetInnerHTML={{
                    __html: row.original.description,
                }}
            />
        ),
        size: 400,
        enableSorting: true,
    },
    {
        accessorKey: "action1",
        header: "Description",
        cell: () => (
            <button type="button" className="w-fit bg-blue rounded-md px-2.5 py-2 text-white ">View</button>
        ),
        size: 50,
        enableSorting: false,
    },
];
