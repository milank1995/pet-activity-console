import { generatePath, useNavigate } from "react-router-dom";
import { DownloadIcon } from "../../assets/Icons.tsx";
import DataTable from "../../components/DataTable";
import TabPanel from "../../components/TabPanel/index.tsx";
import Tabs from "../../components/Tabs/index.tsx";
import { dashboardTabs, rewardsStats, statusList } from "../../constants.ts";
import { routeConstants } from "../../router/routeConstants.ts";
import RewardChart from "./components/RewardChart.tsx";
import { rewardsTableColumns } from "./components/RewardsTableColumns.tsx";
import StatCard from "./components/StatCard.tsx";
import StatusLegend from "./components/StatusLegend.tsx";
import { useDashboardState } from "../../hooks/Dashboard/useDashboardState.ts"

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    selectedValue,
    selectedIndex,
    userList,
    setSelectedValue,
    setSelectedIndex
  } = useDashboardState();

  return (
    <div className="h-100 flex flex-col gap-10 flex-1 overflow-auto no-scrollbar">
      <select
        value={selectedValue}
        onChange={(event) => setSelectedValue(event.target.value)}
        className="w-[10.56rem] focus:outline-0 rounded px-2.5 py-[0.9375rem] text-dark-gray"
      >
        <option value="all-time">All Time</option>
        <option value="recent">Recent</option>
      </select>

      <div className="flex items-center gap-5">
        {rewardsStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-2.5">
        <Tabs
          tabs={dashboardTabs}
          selectedIndex={selectedIndex}
          onTabChange={setSelectedIndex}
        />
        <TabPanel
          index={2}
          value={selectedIndex}
          className="flex-1 flex flex-col gap-2.5"
        >
          <div className="bg-white w-full h-[22.125rem] rounded-[0.625rem] py-5">
            <div className="flex items-center justify-center float-end w-[2.875rem] h-10 rounded bg-white">
              <div className="w-fit cursor-pointer">
                <DownloadIcon />
              </div>
            </div>

            <RewardChart className="" />
          </div>
          <div className="bg-white w-full rounded-[0.625rem]">
            <div className="flex items-center justify-end gap-5 p-3">
              {statusList.map((status, index) => (
                <StatusLegend key={index} {...status} />
              ))}
            </div>

            <div className="border-t border-light-gray">
              <DataTable
                columns={rewardsTableColumns}
                bodyData={userList}
                bodyRowClassName="!h-[3.125rem]"
                onRowClick={(row) => {
                  navigate(
                    generatePath(routeConstants.usersView, {
                      id: row.original.id,
                    }),
                  );
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
