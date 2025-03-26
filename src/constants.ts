import {RewardIcon, RewardRedeemIcon, StarIcon, UserIcon} from "./assets/Icons.tsx";

export const dashboardTabs = [
    {name: 'Pet Owner Joins'},
    {name: 'Starts'},
    {name: 'Rewards'}
];

export const rewardsStats = [
    { icon: UserIcon, value: 344, label: "Pet owner joins", textColor: "text-purple", bgColor: "bg-light-purple", iconBg: "bg-purple" },
    { icon: StarIcon, value: 1208, label: "Stars earned", textColor: "text-green", bgColor: "bg-light-green", iconBg: "bg-green" },
    { icon: RewardIcon, value: 210, label: "Reward issued", textColor: "text-green", bgColor: "bg-light-green", iconBg: "bg-green" },
    { icon: RewardRedeemIcon, value: 210, label: "Reward issued", textColor: "text-blue", bgColor: "bg-light-blue", iconBg: "bg-blue" },
];