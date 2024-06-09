import AOS from "aos";
import "aos/dist/aos.css";
import useSurveys from "../../../Hooks/useSurveys";
import useResponse from "../../../Hooks/useResponse";
import img from "../../../../public/icon/pngwing.com (11).png"
import useAllUsers from "../../../Hooks/useAllUsers";
import { FaArrowAltCircleDown, FaCheckSquare, FaExclamation, FaExclamationTriangle, FaTimesCircle, FaVoteYea } from "react-icons/fa";
AOS.init();

const AdminHome = () => {
    const [surveys] = useSurveys();
    const [response] = useResponse();
    const [users] = useAllUsers()
    const yesVote = response.filter((item) => item.Yes === 1);
    const noVote = response.filter((item) => item.No === 1);
    const report = response.filter((item) => item.report === 1);
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="space-y-5 lg:m-24 m-5 lg:flex-row-reverse flex flex-col items-center"
        >
            <img className="lg:max-w-[600px]" src={img} alt="" />
            <div>
                <h1 className="lg:text-6xl text-5xl font-bold text-sky-300">
                    Total Survey : {surveys.length}
                </h1>
                <h1 className="text-5xl mt-2 text-center font-bold text-gray-500">
                    Total User : {users.length}
                </h1>

                <div
                    className="card  border-2 rounded-xl bg-base-200 shadow-xl p-5 mx-10 text-left  space-y-1 mt-5"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                >
                    <p className="font-bold text-5xl flex items-center gap-2"><FaArrowAltCircleDown className="text-sky-300"></FaArrowAltCircleDown>
                        <span className=" text-sky-300 font-bold ">
                            Votes  :  {response.length}
                        </span>  
                        
                    </p>
                    <p className="font-bold text-3xl ">
                        <span className=" text-green-400 pl-5 font-bold flex items-center gap-2"><FaCheckSquare ></FaCheckSquare>
                            YES :  {yesVote.length}
                        </span> 
                       
                    </p>
                    <p className="font-bold text-3xl">
                        <span className=" text-red-400 pl-5 font-bold flex items-center gap-2 "><FaTimesCircle ></FaTimesCircle>
                            NO : {noVote.length}
                        </span> 
                        
                    </p>
                    <p className="font-bold text-3xl ">
                        <span className=" text-orange-400 pl-5 font-bold flex items-center gap-2"><FaExclamationTriangle></FaExclamationTriangle>
                            Report : {report.length}
                        </span> 
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
