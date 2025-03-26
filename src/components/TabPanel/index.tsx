import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

const TabPanel = ({
  value,
  index,
  children,
  className = "",
}: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={className}
    >
      {value === index && children}
    </div>
  );
};

export default TabPanel;
