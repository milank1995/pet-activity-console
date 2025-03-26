import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {LeftPurpleArrowIcon, RewardIcon, StarIcon} from "../../assets/Icons.tsx";
import DogPaw from "../../components/DogPaw.tsx";
import SummaryInfo from "../../components/users/SummaryInfo.tsx";

const UsersView = () => {
    const params = useParams()
    const {state} = useLocation()
    const navigate = useNavigate()
    console.log('params', params)
    return (
        <div className='h-100 flex flex-col gap-10 flex-1 overflow-auto no-scrollbar'>
            <button
                className="flex items-center gap-4 text-base text-purple font-semibold w-fit"
                onClick={()=>navigate(-1)}
            >
                <LeftPurpleArrowIcon/>
                Back
            </button>
            <div className="flex-1 flex flex-col overflow-auto">
                <div className="flex flex-col gap-8">
                    <p className="text-purple font-bold text-4xl">
                        {state?.firstName} {state?.lastName}
                    </p>
                    <div className="flex items-center gap-10">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-6 flex flex-col gap-5 w-40">
                                <div>
                                    <p className="text-xs text-purple font-bold">Email</p>
                                    <p className="text-sm text-dark-gray font-normal">luis@gmail.com</p>
                                </div>
                                <div>
                                    <p className="text-xs text-purple font-bold">Phone number</p>
                                    <p className="text-sm text-dark-gray font-normal">123456789</p>
                                </div>
                                <div>
                                    <p className="text-xs text-purple font-bold">Member since</p>
                                    <p className="text-sm text-dark-gray font-normal">01/01/2025</p>
                                </div>
                            </div>
                            <div className="col-span-6 flex flex-col gap-5  w-40">
                                <div>
                                    <p className="text-xs text-purple font-bold">Last stamp</p>
                                    <p className="text-sm text-dark-gray font-normal">01/01/2025</p>
                                </div>
                                <div>
                                    <p className="text-xs text-purple font-bold">Last reward earned</p>
                                    <p className="text-sm text-dark-gray font-normal">30/01/2025</p>
                                </div>
                                <div>
                                    <p className="text-xs text-purple font-bold">Last reward redeemed</p>
                                    <p className="text-sm text-dark-gray font-normal">15/02/2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[36.5rem] h-[12.9375rem] bg-light-purple rounded-[0.625rem] p-5">
                            <DogPaw/>
                            <div className="w-[10.625rem]">
                                <SummaryInfo summaryData={{
                                    title: 'Current card summary',
                                    startInfo: {count:0, label: 'Current stars'},
                                    rewardInfo:{count:1, label: 'Available rewards'}
                                }}/>
                            </div>
                            <div className="p-5 bg-white rounded-[0.3125rem]">
                                <div className="w-[9.0625rem]">
                                    <SummaryInfo summaryData={{
                                        title: 'Total summary',
                                        startInfo: {count:12, label: 'Total stars'},
                                        rewardInfo:{count:3, label: 'Total rewards'}
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UsersView;