import { BellIcon, LogoutIcon } from "../../assets/Icons.tsx";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import Notification from "../Notification";
import React from "react";
import {useNavigate} from "react-router-dom";
import {routeConstants} from "../../router/routeConstants.ts";

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between">
      <p className="pt-[2.375rem] pb-2.5 text-2xl text-[#121723] font-semibold">
        ABC Vet - Console
      </p>
      <div className="flex items-center gap-2.5">
          {/*<Notification/>*/}
          <div className="header-box cursor-pointer" onClick={() => navigate(routeConstants.notifications)}>
              <BellIcon />
          </div>
        <div className="header-box">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
