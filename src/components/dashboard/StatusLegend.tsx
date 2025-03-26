import React from 'react';
import {RewardIcon, RewardRedeemIcon, RewardExpiredIcon} from "../../assets/Icons.tsx";
interface StatusItem {
    label: string;
    color: string;
    icon: React.ReactNode;
}

export const statusList: StatusItem[] = [
    { label: "Issued", color: "bg-green", icon: <RewardIcon/> },
    { label: "Redeemed", color: "bg-blue", icon: <RewardRedeemIcon/> },
    { label: "Reconciled", color: "bg-yellow", icon: <RewardRedeemIcon/> },
    { label: "Expired", color: "bg-pink", icon: <RewardExpiredIcon/> },
]
const StatusLegend = () => {
    return (
        <div className="flex items-center justify-end gap-5 p-3">
            {statusList.map(({ label, color, icon }) => (
                <div key={label} className="flex items-center gap-2.5">
                    <div className={`flex items-center justify-center w-6 h-6 ${color} rounded-full`}>
                        {icon}
                    </div>
                    <p className="font-normal text-xs leading-10 text-dark-gray">{label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatusLegend;