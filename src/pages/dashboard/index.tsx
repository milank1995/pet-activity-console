import React, {useEffect, useState} from 'react';
import StatCard from "../../components/dashboard/StatCard.tsx";
import RewardChart from "../../components/dashboard/RewardChart.tsx";
import Tabs from "../../components/Tabs.tsx";
import TabPanel from "../../components/TabPanel.tsx";
import TableContainer from "../../components/TableContainer.tsx";
import StatusLegend from "../../components/dashboard/StatusLegend.tsx";
import {
    DownloadIcon,
} from "../../assets/Icons.tsx";
import {dashboardTabs, rewardsStats} from "../../constants.ts";
import {generatePath, useNavigate} from "react-router-dom";
import {routeConstants} from "../../router/routeConstants.ts";
import {fetchRewardsData} from "../../services/rewardsApi.ts";
import {User} from "../../data/types/Rewards.ts";
import {rewardsTableColumns} from "../../components/dashboard/components/RewardsTableColumns.tsx";

const Dashboard = () => {
    const navigate = useNavigate()
    const [selectedValue, setSelectedValue] = useState("all-time")
    const [selectedIndex, setSelectedIndex] = useState(2)
    const [userList, setUserList] = React.useState<User[]>([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchRewardsData();
                setUserList(data);
            } catch (err) {
                console.error(err);
            } finally {
                // setLoading(false);
            }
        };

        loadData();
    }, []);
    return (
        <div className='h-100 flex flex-col gap-10 flex-1 overflow-auto no-scrollbar'>
            <select value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)}
                    className="w-[10.56rem] focus:outline-0 rounded px-2.5 py-[0.9375rem] text-dark-gray">
                <option value="all-time">All Time</option>
                <option value="recent">Recent</option>
            </select>

            <div className="flex items-center gap-5">
                {rewardsStats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="flex-1 flex flex-col gap-2.5">
                <Tabs tabs={dashboardTabs} selectedIndex={selectedIndex} onTabChange={setSelectedIndex}/>
                <TabPanel index={2} value={selectedIndex} className="flex-1 flex flex-col gap-2.5">
                    <div className="bg-white w-full h-[22.125rem] rounded-[0.625rem] py-5">
                        <div className="flex items-center justify-center float-end w-[2.875rem] h-10 rounded bg-white"><DownloadIcon/></div>

                        <RewardChart/>

                    </div>
                    <div className="bg-white w-full h-[22.125rem] rounded-[0.625rem]">
                        <StatusLegend/>
                       <div className="border-t">
                           <TableContainer
                               columns={rewardsTableColumns}
                               bodyData={userList}
                               bodyRowClassName="!h-[3.125rem]"
                               onRowClick={(row: any)=> {
                                   navigate(generatePath(routeConstants.usersView,{id: row.original.firstName}), {state: row.original})
                               }}
                           />
                       </div>

                    </div>

                </TabPanel>
            </div>


        </div>
    );
};

export default Dashboard;