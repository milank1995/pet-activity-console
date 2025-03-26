import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {routeConstants} from "../router/routeConstants.ts";
import {DashboardActiveIcon, DashboardIcon, RewardBigIcon} from '../assets/Icons.tsx'

const Sidebar = () => {
    const location = useLocation()

    const clickedUrl = location.pathname

    const sidebarItems = [
        {
            icon: clickedUrl===routeConstants.dashboard ? DashboardActiveIcon : DashboardIcon,
            label: "Dashboard",
            path: routeConstants.dashboard,
        },
        {
            icon: RewardBigIcon,
            label: "Rewards",
            path: routeConstants.rewards,
        },
    ]

    return (
        <>
            <div className="flex flex-col py-2 px-5 h-screen overflow-y-auto w-[15.9375rem] bg-purple pt-[12.375rem] rounded-tr-[1.25rem]">
                <p className="uppercase text-white text-xl ">Clinic console</p>
                <div className="flex-1 flex flex-col gap-10 overflow-auto mt-[3.75rem] no-scrollbar">
                    {
                        sidebarItems.map((item, index) => {
                            const isActive = clickedUrl === item.path
                            return (
                                <React.Fragment key={index}>
                                    <NavLink to={item.path}>
                                        <div
                                            className={`${isActive ? 'text-blue' : 'text-white'} flex items-center gap-6 px-4 font-normal text-base rounded-lg`}>
                                            <div className="w-5 h-5">
                                                <item.icon size="1.25rem"/>
                                            </div>
                                            <p className="mt-1"> {item.label}</p>
                                        </div>
                                    </NavLink>
                                </React.Fragment>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default Sidebar;