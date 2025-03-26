import { RewardExpiredIcon, RewardIcon, RewardRedeemIcon, StarIcon, UserIcon } from "./assets/Icons.tsx";
import dog1 from "./assets/dog1.png";
import dog2 from "./assets/dog2.png";

export const dashboardTabs = [
    {name: 'Pet Owner Joins'},
    {name: 'Stars'},
    {name: 'Rewards'}
];

export const rewardStarTabs = [
    {name: 'Stars'},
    {name: 'Rewards'}
];

export const rewardsStats = [
    { icon: UserIcon, value: 344, label: "Pet owner joins", textColor: "text-purple", bgColor: "bg-light-purple", iconBg: "bg-purple" },
    { icon: StarIcon, value: 1208, label: "Stars earned", textColor: "text-green", bgColor: "bg-light-green", iconBg: "bg-green" },
    { icon: RewardIcon, value: 210, label: "Reward issued", textColor: "text-green", bgColor: "bg-light-green", iconBg: "bg-green" },
    { icon: RewardRedeemIcon, value: 210, label: "Reward issued", textColor: "text-blue", bgColor: "bg-light-blue", iconBg: "bg-blue" },
];

export const activityStats = [
    { icon: StarIcon, value: 13, label: "Total stars", textColor: "text-purple", bgColor: "bg-light-purple", iconBg: "bg-purple" },
    { icon: StarIcon, value: 0, label: "Current earned", textColor: "text-green", bgColor: "bg-light-green", iconBg: "bg-green" },
    { icon: StarIcon, value: 1, label: "Starts expired", textColor: "text-pink", bgColor: "bg-light-pink", iconBg: "bg-pink" },
];

export const statusList = [
    { label: "Issued", color: "bg-green", icon: RewardIcon},
    { label: "Redeemed", color: "bg-blue", icon: RewardRedeemIcon },
    { label: "Reconciled", color: "bg-yellow", icon: RewardRedeemIcon },
    { label: "Expired", color: "bg-pink", icon: RewardExpiredIcon },
]

export const statusListStars = [
    { label: "Rewarded stars", color: "bg-gray", icon: StarIcon},
    { label: "Current stars", color: "bg-green", icon: StarIcon },
    { label: "Stars expiring soon (within 30 days)", color: "bg-yellow", icon: StarIcon },
    { label: "Stars expired", color: "bg-pink", icon: StarIcon },
]

export const petsList = [
    {
        name: 'Blue',
        image: dog1,
        weightSize: 'Medium dog (10-20 kg)',
        gender: 'Male',
        birthDate: '10/10/2022',
        age: '3',
        totalStars: 8,
        totalRedeemed: 1,
        nextTreatment: '5 days',
        bgColor: 'bg-pink'
    },
    {
        name: 'Buddy',
        image: dog2,
        weightSize: 'Medium dog (10-20 kg)',
        gender: 'Male',
        birthDate: '01/01/2024',
        age: '1',
        totalStars: 1,
        totalRedeemed:4 ,
        nextTreatment: '2 Weeks',
        bgColor: 'bg-blue'
    }
]