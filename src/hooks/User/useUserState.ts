import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {RewardStar, User} from "../../data/types/Rewards.ts";
import {fetchStarsData, fetchUserById} from "../../services/rewardsApi.ts";

export const useUserState = () => {
    const params = useParams();
    const [userInfo, setUserInfo] = useState<User | null>(null);
    const [rewardStarList, setRewardStarList] = useState<RewardStar[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const query = document.querySelector('#user-content');
        query?.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const loadUserData = async (id: number) => {
            try {
                const data = await fetchUserById(id);
                setUserInfo(data);
            } catch (err) {
                setUserInfo(null)
            }
        };

        const loadStarsData = async () => {
            try {
                const data = await fetchStarsData();
                setRewardStarList(data);
            } catch (err) {
                setRewardStarList([])
            }
        };

        if (params?.id) {
            loadUserData(Number(params?.id));
        }
        loadStarsData();
    }, [params?.id]);

    return {
        userInfo,
        rewardStarList,
        selectedIndex,
        setSelectedIndex
    }
}