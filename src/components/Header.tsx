import {BellIcon, LogoutIcon} from "../assets/Icons.tsx";

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <p className="pt-[2.375rem] pb-2.5 text-2xl text-[#121723] font-semibold">ABC Vet - Console</p>
            <div className="flex items-center gap-2.5">
                <div className="header-box">
                    <BellIcon/>
                </div>
                <div className="header-box">
                    <LogoutIcon/>
                </div>
            </div>
        </div>
    );
};

export default Header;