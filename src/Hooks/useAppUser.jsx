import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSurveys = () => {
    const axiosPublic = useAxiosPublic()

    const {data: users =[], isPending: loading, refetch} = useQuery({
        queryKey: ['survey'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })

    return [users, loading, refetch];
};

export default useSurveys;