import { useNavigate } from "react-router-dom";
import { LeftPurpleArrowIcon } from "../../assets/Icons.tsx";
import StatCard from "../../components/Dashboard/components/StatCard.tsx";
import StatusLegend from "../../components/Dashboard/components/StatusLegend.tsx";
import DataTable from "../../components/DataTable";
import TabPanel from "../../components/TabPanel/index.tsx";
import Tabs from "../../components/Tabs/index.tsx";
import PetCard from "../../components/Users/components/PetCard.tsx";
import { starsTableColumns } from "./components/StartTableColumns.tsx";
import {
  activityStats,
  petsList,
  rewardStarTabs,
  statusListStars,
} from "../../constants.ts";
import { useUserState} from "../../hooks/User/useUserState.ts"
import UserSummary from "./components/UserSummary.tsx";

const Users = () => {
  const navigate = useNavigate();

  const {
    userInfo,
    rewardStarList,
    selectedIndex,
    setSelectedIndex
  } = useUserState();

  return (
    <div className="h-100 flex flex-col gap-10 flex-1 overflow-auto no-scrollbar">
      <button
        className="flex items-center gap-4 text-base text-purple font-semibold w-fit"
        onClick={() => navigate(-1)}
      >
        <LeftPurpleArrowIcon />
        Back
      </button>

      <UserSummary
          userInfo={userInfo}
      />

      <div className="flex flex-col gap-8">
        <p className="text-base text-purple font-bold">
          Pets({petsList.length})
        </p>
        <div className="flex gap-8">
          {petsList.map((pet) => (
            <PetCard {...pet} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-base text-purple font-bold">Activity</p>
        <div className="flex items-center gap-5">
          {activityStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Tabs
            tabs={rewardStarTabs}
            selectedIndex={selectedIndex}
            onTabChange={setSelectedIndex}
          />
          <div className="flex items-center gap-8">
            <select className="w-[10.56rem] focus:outline-0 rounded px-2.5 py-[0.9375rem] text-dark-gray">
              <option value="all-pets" selected>
                All pets
              </option>
              <option value="recent">Recent</option>
            </select>
            {selectedIndex === 0 && (
              <p className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  className="w-5 h-5 appearance-none text-purple bg-white checked:appearance-auto border-white rounded focus:ring-0"
                />

                <span className="text-xs text-dark-gray font-normal">
                  Show stars expired only
                </span>
              </p>
            )}
          </div>
        </div>

        <TabPanel index={0} value={selectedIndex} className="mt-2.5">
          <div className="bg-white w-full rounded-[0.625rem] ">
            <div className="flex items-center justify-end gap-5 p-3">
              {statusListStars.map((status, index) => (
                <StatusLegend key={index} {...status} />
              ))}
            </div>
            <div className="border-t border-light-gray">
              <DataTable
                bodyData={rewardStarList}
                columns={starsTableColumns}
              />
            </div>
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

export default Users;
