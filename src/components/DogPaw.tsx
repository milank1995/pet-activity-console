import React from 'react';
import paw1 from "../assets/leg1.png";
import paw2 from "../assets/leg2.png";
import paw3 from "../assets/leg3.png";
import paw4 from "../assets/leg4.png";
import paw5 from "../assets/leg5.png";

const DogPaw = () => {
    return (
        <div className="relative w-40 h-40 flex justify-center items-center">
            <div className="relative flex items-center justify-center w-[2.045rem] h-[2.574rem] text-white">
                <img src={paw1} alt="" className="w-full h-full"/>
                <p className="absolute rotate-[-25deg]">1</p>
            </div>
            <div className="absolute left-[56%] bottom-[58%] flex items-center justify-center w-8 h-[2.875rem] text-white">
                <img src={paw2} alt="" className="w-full h-full"/>
                <p className="absolute rotate-[-10deg]">2</p>
            </div>
            <div className="absolute left-[79%] bottom-[59%] flex items-center justify-center w-[2.0625rem] h-[2.8125rem] text-white">
                <img src={paw3} alt="" className="w-full h-full"/>
                <p className="absolute rotate-[20deg]">3</p>
            </div>
            <div className="absolute left-[94%] bottom-[38%] flex items-center justify-center w-[2.125rem] h-[2.5625rem] text-white">
                <img src={paw4} alt="" className="w-full h-full"/>
                <p className="absolute rotate-[20deg]">3</p>
            </div>
            <div className="absolute left-[54%] top-[50%] flex items-center justify-center w-[4.9375rem] h-[3.625rem] text-white">
                <img src={paw5} alt="" className="w-full h-full"/>
                <p className="absolute left-[15%] top-[20%] flex flex-col text-center text-[0.625rem] leading-4">
                    Buy 3, <span> Get 1 FREE</span>
                </p>
            </div>
        </div>
    );
};

export default DogPaw;