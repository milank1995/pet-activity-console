import React, {useMemo, useState} from 'react';
import {
    DownloadIcon,
    RewardIcon,
    RewardRedeemIcon,
    StarIcon,
    UserIcon
} from "../../assets/Icons.tsx";
import StatCard from "../../components/dashboard/StatCard.tsx";
import RewardChart from "../../components/dashboard/RewardChart.tsx";
import Tabs from "../../components/Tabs.tsx";
import TabPanel from "../../components/TabPanel.tsx";
import dummy from "../../utils/dummy.json"
import {ColumnDef} from "@tanstack/react-table";
import TableContainer from "../../components/TableContainer.tsx";
import StatusLegend, {statusList} from "../../components/dashboard/StatusLegend.tsx";

const tabs = [
    {name: 'Pet Owner Joins'},
    {name: 'Starts'},
    {name: 'Rewards'},
]

const stats = [
    { icon: UserIcon, value: 344, label: "Pet owner joins", textColor: "text-purple", bgColor: "bg-light-purple", iconBg: "bg-purple" },
    { icon: StarIcon, value: 1208, label: "Stars earned", textColor: "text-green", bgColor: "bg-light-green", iconBg: "bg-green" },
    { icon: RewardIcon, value: 210, label: "Reward issued", textColor: "text-green", bgColor: "bg-light-green", iconBg: "bg-green" },
    { icon: RewardRedeemIcon, value: 210, label: "Reward issued", textColor: "text-blue", bgColor: "bg-light-blue", iconBg: "bg-blue" },
];
const Dashboard = () => {
    const [selectedValue, setSelectedValue] = useState("all-time")
    const [selectedIndex, setSelectedIndex] = useState(2)

    const headers = useMemo<ColumnDef<any>[]>(
        () => [

            {
                accessorKey: 'status',
                header: 'Status',
                cell:({row})=>{
                    const status = row.original.status
                    const bgColor = statusList.find(item=>item.label === status)?.color
                    const icon = statusList.find(item=>item.label === status)?.icon
                    return <div className={`flex items-center justify-center w-6 h-6 rounded-full ${bgColor}`}>
                        {icon}
                    </div>
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
                header: ()=>(
                    <DownloadIcon/>
                ),
                size: 50,
                enableSorting: false,
            },
        ],
        []
    )

    return (
        <div className='h-100 flex flex-col gap-10 flex-1 overflow-auto no-scrollbar'>
            <select value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)}
                    className="w-[10.56rem] focus:outline-0 rounded px-2.5 py-[0.9375rem] text-dark-gray">
                <option value="all-time">All Time</option>
                <option value="recent">Recent</option>
            </select>

            <div className="flex items-center gap-5">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
            <div className="flex-1 flex flex-col gap-2.5">
                <Tabs tabs={tabs} selectedIndex={selectedIndex} onTabChange={setSelectedIndex}/>
                <TabPanel index={2} value={selectedIndex} className="flex-1 flex flex-col gap-2.5">
                    <div className="bg-white w-full h-[22.125rem] rounded-[0.625rem] py-5">
                        <div className="flex items-center justify-center float-end w-[2.875rem] h-10 rounded bg-white"><DownloadIcon/></div>

                        <RewardChart/>

                    </div>
                    <div className="bg-white w-full h-[22.125rem] rounded-[0.625rem]">
                        <StatusLegend/>
                       <div className="border-t">
                           <TableContainer
                               columns={headers}
                               bodyData={dummy.users}
                               bodyRowClassName="!h-[3.125rem]"
                           />
                       </div>

                    </div>

                </TabPanel>
            </div>


        </div>
    );
};

export default Dashboard;