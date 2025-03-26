import React from 'react';
import {
    type Table,
} from '@tanstack/react-table';

export interface User {
    id: number;
    status: string;
    firstName: string;
    lastName: string;
    petName: string;
    issueDate: string;
    redeemedDate: string;
    expiryDate: string;
    size: string;
}

export interface TableContainerProps {
    bodyData: any[]
    columns: any[],
    bodyRowClassName?: string;
    tableClassName?: string;
    headerClassName?: string;
    onRowClick?: (row:any)=>void,
}

export interface StatusListItem {
    label: string;
    color: string;
    icon: React.ReactNode;
}

export interface RewardsTableHeadProps<TData> {
    table: Table<TData>;
}