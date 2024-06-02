
import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useSurveyorSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const {data: surveys =[], isPending: loading, refetch} = useQuery({
        queryKey: ['survey'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/surveys/${user.email}`)
            return res.data
        }
    })

    return [surveys, loading, refetch];
};

export default useSurveyorSurvey;