import { BellIconNew, RewardIcon, StarIcon } from "../../../assets/Icons.tsx";
import InfoBlock from "./InfoBlock.tsx";

interface PetCardProps {
  name: string;
  image: string;
  weightSize: string;
  gender: string;
  birthDate: string;
  age: string;
  totalStars: number;
  totalRedeemed: number;
  nextTreatment: string;
  bgColor: string;
}
const PetCard = ({
  name,
  image,
  weightSize,
  gender,
  birthDate,
  age,
  totalStars,
  totalRedeemed,
  nextTreatment,
  bgColor,
}: PetCardProps) => {
  return (
    <div className="w-[19.4375rem] bg-white rounded-[0.625rem]">
      {/* Header */}
      <div className="bg-light-purple border-top p-4 h-[4.75rem] flex items-center gap-5 rounded-t-[0.625rem]">
        <div className="w-10 h-10 rounded-full">
          <img src={image} alt={name} className="w-full h-full" />
        </div>

        <p className="text-purple font-bold text-xl">{name}</p>
      </div>

      {/* Info Section */}
      <div className="px-5 pt-4 pb-8">
        <div className="flex flex-col gap-3 pb-5 text-dark-gray">
          <InfoBlock title="Weight/size" value={weightSize} />
          <InfoBlock title="Gender" value={gender} />
          <InfoBlock
            title="Date of birth"
            value={`${birthDate} - ${age} old`}
          />
        </div>

        <div className="flex justify-between border-t pt-5 border-light-gray">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-[1.875rem] h-[1.875rem] rounded-lg bg-purple">
              <StarIcon />
            </div>
            <div>
              <p className="text-purple text-xl font-bold leading-5">
                {totalStars}
              </p>
              <p className="text-purple text-xs font-normal">Total stars</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-[1.875rem] h-[1.875rem] rounded-lg bg-pink">
              <RewardIcon />
            </div>
            <div>
              <p className="text-pink text-xl font-bold leading-5">
                {totalRedeemed}
              </p>
              <p className="text-pink text-xs font-normal">Total redeemed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Treatment Section */}
      <div
        className={`${bgColor} text-white text-xs font-semibold leading-[100%] text-center py-3 h-[2.4375rem]  border-bottom rounded-b-[0.625rem] flex items-center justify-center gap-1.5`}
      >
        <BellIconNew />
        Next treatment in{" "}
        <span className="font-extrabold">{nextTreatment}</span>
      </div>
    </div>
  );
};

export default PetCard;
