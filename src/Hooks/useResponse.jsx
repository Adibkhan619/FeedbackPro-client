
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useResponse = () => {
    const axiosPublic = useAxiosPublic()
    const {data: response =[], isPending: loading, refetch} = useQuery({
        queryKey: ['response'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/response')
            return res.data
        }
    })

    return [response, loading, refetch];
};

export default useResponse;