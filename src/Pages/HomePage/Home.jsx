import Banner from "./Banner/Banner";
import HomeSurveys from "./HomeSurveys.jsx/HomeSurveys";
import HowItWorks from "./HowItworks/HowItWorks";
import LatestData from "./LatestData/LatestData";
// import ParallaxBanner from "./Banner/ParallaxBanner";

const Home = () => {
    return (
        <div className="bg-base-100">
            <Banner></Banner>
            {/* <ParallaxBanner></ParallaxBanner> */}
            <div className="mx-24">
                <HomeSurveys></HomeSurveys>
                <LatestData></LatestData>
                <HowItWorks></HowItWorks>
            </div>
            
        </div>
    );
};

export default Home;
