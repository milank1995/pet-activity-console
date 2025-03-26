import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="flex h-screen text-base font-medium bg-main">
      <Sidebar />
      <div
        className={`flex flex-col flex-1 overflow-x-auto pl-[2.3125rem] pr-8 `}
      >
        <Header />
        <div className="flex-1 overflow-auto bg-background py-8 no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
