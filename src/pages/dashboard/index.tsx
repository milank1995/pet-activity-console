import React, {useState} from 'react';
import {DownArrow} from "../../assets/Icons.tsx";

const Dashboard = () => {
    const [selectedValue, setSelectedValue] = useState("all-time")
    return (
        <div className='h-100 flex flex-col gap-10'>
            <select value={selectedValue} onChange={(event)=>setSelectedValue(event.target.value)} className="w-[10.56rem] focus:outline-0 rounded px-2.5 py-[0.9375rem]">
                <option value="all-time">All Time</option>
                <option value="recent">Recent</option>
            </select>
            {/*<div className="flex items-center relative">*/}
            {/*    <select className="w-[10.56rem] custom-select rounded px-2.5 py-[0.9375rem]">*/}
            {/*        <option value="option1">Option 1</option>*/}
            {/*        <option value="option2">Option 2</option>*/}
            {/*        <option value="option3">Option 3</option>*/}
            {/*    </select>*/}
            {/*    <div className="absolute left-0">*/}
            {/*        <DownArrow/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>

            </div>
        </div>
    );
};

export default Dashboard;