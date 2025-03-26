import { StatusListItem } from "../../../data/types/Rewards";

const StatusLegend = ({ label, color, icon: Icon }: StatusListItem) => {
  return (
    <div key={label} className="flex items-center gap-2.5">
      <div
        className={`flex items-center justify-center w-6 h-6 ${color} rounded-full`}
      >
        <Icon />
      </div>
      <p className="font-normal text-xs leading-10 text-dark-gray">{label}</p>
    </div>
  );
};

export default StatusLegend;
