import React from "react";

interface TabProps {
  name: string;
}
interface Props {
  tabs: TabProps[];
  selectedIndex: number;
  onTabChange: (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  tabButtonClassName?: string;
}
const Tabs = ({
  tabs,
  selectedIndex = 0,
  onTabChange,
  tabButtonClassName,
}: Props) => {
  return (
    <div className="flex items-center gap-4 text-sm bg-white p-2 rounded-[0.625rem] w-fit">
      {tabs.map((tab, index) => (
        <button
          type="button"
          key={index}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            onTabChange(index, event)
          }
          className={`${
            selectedIndex === index
              ? "bg-purple text-white"
              : "text-purple bg-white"
          } font-bold text-sm p-3 min-w-[8.75rem] rounded ${tabButtonClassName}`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
