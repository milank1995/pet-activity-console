import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  DashboardActiveIcon,
  DashboardIcon,
  RewardBigIcon,
} from "../../assets/Icons.tsx";
import { routeConstants } from "../../router/routeConstants.ts";

const Sidebar = () => {
  const location = useLocation();

  const clickedUrl = location.pathname;

  const sidebarItems = [
    {
      icon:
        clickedUrl === routeConstants.dashboard
          ? DashboardActiveIcon
          : DashboardIcon,
      label: "Dashboard",
      path: routeConstants.dashboard,
    },
    {
      icon: RewardBigIcon,
      label: "Rewards",
      path: "/rewards/view/1",
    },
    {
      icon: RewardBigIcon,
      label: "Create Announcement",
      path: routeConstants.createAnnouncement,
    },
    {
      icon: RewardBigIcon,
      label: "Announcements",
      path: routeConstants.announcements,
    },
  ];

  return (
    <>
      <div className="flex flex-col py-2 px-5 h-screen overflow-y-auto w-[15.9375rem] bg-purple pt-[12.375rem] rounded-tr-[1.25rem]">
        <p className="uppercase text-white text-[20px] font-semibold">Clinic console</p>
        <div className="flex-1 flex flex-col gap-10 overflow-auto mt-[3.75rem] no-scrollbar">
          {sidebarItems.map((item, index) => {
            const isActive = clickedUrl === item.path;
            return (
              <React.Fragment key={index}>
                <NavLink
                  to={item?.label === "Rewards" ? "/rewards/view/1" : item.path}
                >
                  <div
                    className={`${
                      isActive ? "text-blue" : "text-white"
                    } flex items-center gap-6 px-4 font-normal text-base rounded-lg`}
                  >
                    <div className="w-5 h-5">
                      <item.icon />
                    </div>
                    <p className="text-[16px] font-semibold"> {item.label}</p>
                  </div>
                </NavLink>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
