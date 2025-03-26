import React, {useEffect, useState} from "react";
import {User} from "../../data/types/Rewards.ts";
import {fetchRewardsData} from "../../services/rewardsApi.ts";

export const useDashboardState = () => {
    const [selectedValue, setSelectedValue] = useState("all-time");
    const [selectedIndex, setSelectedIndex] = useState(2);
    const [userList, setUserList] = React.useState<User[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchRewardsData();
                setUserList(data);
            } catch (err) {
                setUserList([])
            }
        };

        loadData();
    }, []);

    return {
        selectedValue,
        selectedIndex,
        userList,
        setSelectedValue,
        setSelectedIndex
    };
}