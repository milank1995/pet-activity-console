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
    bodyRowClassName?: string;
    tableClassName?: string;
    headerClassName?: string;
    onRowClick: (id: number | string) => void;
}

export interface StatusListItem {
    label: string;
    color: string;
    icon: React.ReactNode;
}

export interface RewardsTableHeadProps<TData> {
    table: Table<TData>;
}