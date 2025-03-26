import { RewardIcon, StarIcon } from "../../../assets/Icons.tsx";

interface Details {
  count: number | string;
  label: string;
}
interface SummaryData {
  title: string;
  startInfo: Details;
  rewardInfo: Details;
}
interface Props {
  summaryData: SummaryData;
}
const SummaryInfo = ({ summaryData }: Props) => {
  const { title, startInfo, rewardInfo } = summaryData;
  return (
    <>
      <p className="text-sm text-purple font-bold">{title}</p>
      <div className="mt-8 flex items-center gap-5">
        <div className="flex items-center justify-center w-[1.875rem] h-[1.875rem] rounded-lg bg-purple">
          <StarIcon />
        </div>
        <div>
          <p className="text-purple text-xl font-bold leading-5">
            {startInfo.count}
          </p>
          <p className="text-purple text-xs font-normal">{startInfo.label}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-5">
        <div className="flex items-center justify-center w-[1.875rem] h-[1.875rem] rounded-lg bg-pink">
          <RewardIcon />
        </div>
        <div>
          <p className="text-pink text-xl font-bold leading-5">
            {rewardInfo.count}
          </p>
          <p className="text-pink text-xs font-normal">{rewardInfo.label}</p>
        </div>
      </div>
    </>
  );
};

export default SummaryInfo;
