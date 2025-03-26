import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../../data/types/Rewards.ts";
import { statusList } from "../StatusLegend.tsx";
import { DownloadIcon } from "../../../assets/Icons.tsx";

export const rewardsTableColumns: ColumnDef<User>[] = [
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const status = row.original.status;
            const bgColor = statusList.find(item => item.label === status)?.color;
            const icon = statusList.find(item => item.label === status)?.icon;
            return (
                <div className={`flex items-center justify-center w-6 h-6 rounded-full ${bgColor}`}>
                    {icon}
                </div>
            );
        },
        size: 200,
        enableSorting: false,
    },
    {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 150,
        enableSorting: true,
    },
    {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 200,
        enableSorting: true,
    },
    {
        accessorKey: 'petName',
        header: 'Pet Name',
        size: 200,
        enableSorting: true,
    },
    {
        accessorKey: 'issueDate',
        header: 'Issue Date',
        size: 250,
        enableSorting: true,
    },
    {
        accessorKey: 'redeemedDate',
        header: 'Redeemed Date',
        size: 250,
        enableSorting: true,
    },
    {
        accessorKey: 'expiryDate',
        header: 'Expiry Date',
        size: 150,
        enableSorting: true,
    },
    {
        accessorKey: 'size',
        header: 'Size',
        size: 150,
        enableSorting: true,
    },
    {
        accessorKey: 'action',
        header: () => <DownloadIcon />,
        size: 50,
        enableSorting: false,
    },
];