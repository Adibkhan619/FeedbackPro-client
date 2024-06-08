import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useSingleSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()
    const {data: survey =[], isPending: loading, refetch} = useQuery({
        queryKey: ['survey'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/survey/${id}`)
            return res.data
        }
    })

    return [survey, loading, refetch];
};

export default useSingleSurvey;