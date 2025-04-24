import { BellIcon, LogoutIcon } from "../../assets/Icons.tsx";
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import Notification from "../Notification";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="pt-[2.375rem] pb-2.5 text-2xl text-[#121723] font-semibold">
        ABC Vet - Console
      </p>
      <div className="flex items-center gap-2.5">
          <Notification/>
          {/*<Popover>*/}
          {/*    <PopoverButton className="block text-sm/6 font-semibold text-black/50 focus:outline-none data-active:text-black data-focus:outline data-focus:outline-white data-hover:text-black">*/}
          {/*        <div className="header-box">*/}
          {/*            <BellIcon />*/}
          {/*        </div>*/}
          {/*    </PopoverButton>*/}
          {/*    <PopoverPanel*/}
          {/*        transition*/}
          {/*        anchor="bottom"*/}
          {/*        className="divide-y w-max-lg mt-2 divide-black/5 rounded-xl z-10 text-dark-gray bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"*/}
          {/*    >*/}
          {/*        <div className="w-100">*/}
          {/*            <div className="p-3 border-b border-light-gray">*/}
          {/*                <div className="text-sm font-semibold text-purple-900">*/}
          {/*                    Subject1 - Type - 11/04/2025*/}
          {/*                </div>*/}
          {/*                <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold mt-2">*/}
          {/*                    <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80">*/}
          {/*                        Mark as Read*/}
          {/*                    </button>*/}
          {/*                    <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80 w-max">*/}
          {/*                        Mark as Completed*/}
          {/*                    </button>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div className="p-3 border-b border-light-gray">*/}
          {/*                <div className="text-sm font-semibold text-purple-900">*/}
          {/*                    Subject1 - Type - 11/04/2025*/}
          {/*                </div>*/}
          {/*                <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">*/}
          {/*                    <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80">*/}
          {/*                        Mark as Read*/}
          {/*                    </button>*/}
          {/*                    <button className="bg-green text-white py-1 px-2 rounded hover:bg-opacity-80 w-max">*/}
          {/*                        Mark as Completed*/}
          {/*                    </button>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </PopoverPanel>*/}
          {/*</Popover>*/}
        <div className="header-box">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
