import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";

function MainLayout() {
    return (
        <div className="flex h-full text-base font-medium bg-main">
            <Sidebar />
            <div className={`flex flex-col flex-1 overflow-x-auto pl-[2.3125rem] pr-8 `}>
                <Header/>
                <div className="flex-1 overflow-auto bg-background py-8 no-scrollbar">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;