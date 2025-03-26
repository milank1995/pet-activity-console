import InfoBlock from "./InfoBlock.tsx";
import SummaryInfo from "./SummaryInfo.tsx";
import DogPaw from "./DogPaw.tsx";
interface Props {
  userInfo: {
    firstName: string;
    lastName: string;
  } | null;
}

const UserSummary = ({ userInfo }: Props) => {
  return (
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
  );
};

export default UserSummary;
