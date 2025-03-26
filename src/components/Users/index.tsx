import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LeftPurpleArrowIcon } from "../../assets/Icons.tsx";
import StatCard from "../../components/Dashboard/components/StatCard.tsx";
import StatusLegend from "../../components/Dashboard/components/StatusLegend.tsx";
import DataTable from "../../components/DataTable";
import TabPanel from "../../components/TabPanel/index.tsx";
import Tabs from "../../components/Tabs/index.tsx";
import DogPaw from "../../components/Users/components/DogPaw.tsx";
import InfoBlock from "../../components/Users/components/InfoBlock.tsx";
import PetCard from "../../components/Users/components/PetCard.tsx";
import { starsTableColumns } from "../../components/Users/components/StartTableColumns.tsx";
import SummaryInfo from "../../components/Users/components/SummaryInfo.tsx";
import {
  activityStats,
  petsList,
  rewardStarTabs,
  statusListStars,
} from "../../constants.ts";
import { RewardStar, User } from "../../data/types/Rewards.ts";
import { fetchStarsData, fetchUserById } from "../../services/rewardsApi.ts";

const Users = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [rewardStarList, setRewardStarList] = useState<RewardStar[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const loadData = async (id: number) => {
      try {
        const data = await fetchUserById(id);
        setUserInfo(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (params?.id) {
      loadData(Number(params?.id));
    }
  }, [params?.id]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchStarsData();
        setRewardStarList(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="h-100 flex flex-col gap-10 flex-1 overflow-auto no-scrollbar">
      <button
        className="flex items-center gap-4 text-base text-purple font-semibold w-fit"
        onClick={() => navigate(-1)}
      >
        <LeftPurpleArrowIcon />
        Back
      </button>
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex flex-col gap-8">
          <p className="text-purple font-bold text-4xl">
            {userInfo?.firstName} {userInfo?.lastName}
          </p>
          <div className="flex items-center gap-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-5 w-40">
                <InfoBlock title="Email" value="luis@gmail.com" />
                <InfoBlock title="Phone number" value="123456789" />
                <InfoBlock title="Member since" value="01/01/2025" />
              </div>
              <div className="flex flex-col gap-5  w-40">
                <InfoBlock title="Last stamp" value="01/01/2025" />
                <InfoBlock title="Last reward earned" value="30/01/2025" />
                <InfoBlock title="Last reward redeemed" value="15/02/2025" />
              </div>
            </div>
            <div className="flex items-center justify-between w-[36.5rem] h-[12.9375rem] bg-light-purple rounded-[0.625rem] p-5">
              <DogPaw />
              <div className="w-[10.625rem]">
                <SummaryInfo
                  summaryData={{
                    title: "Current card summary",
                    startInfo: { count: 0, label: "Current stars" },
                    rewardInfo: { count: 1, label: "Available rewards" },
                  }}
                />
              </div>
              <div className="p-5 bg-white rounded-[0.3125rem]">
                <div className="w-[9.0625rem]">
                  <SummaryInfo
                    summaryData={{
                      title: "Total summary",
                      startInfo: { count: 12, label: "Total stars" },
                      rewardInfo: { count: 3, label: "Total rewards" },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
