import React from 'react';

interface Props {
    icon: React.ElementType;
    value: number;
    label: string;
    textColor: string;
    bgColor: string;
    iconBg: string;
}
const StatCard = ({ icon: Icon, value, label, textColor, bgColor, iconBg } : Props) => {
    return (
        <div className={`flex items-center gap-5 p-5 w-52 rounded-lg ${textColor} ${bgColor}`}>
            <div className={`flex items-center justify-center w-7 h-7 rounded-lg ${iconBg}`}>
                <Icon/>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-xl font-bold">{value}</p>
                <p className="text-xs font-semibold">{label}</p>
            </div>
        </div>
    );
};

export default StatCard;