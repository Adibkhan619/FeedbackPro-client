
import Banner from "./Banner/Banner";
import FaqSection from "./FaqSection/FaqSection";
import HomeSurveys from "./HomeSurveys.jsx/HomeSurveys";
import HowItWorks from "./HowItworks/HowItWorks";
import LatestData from "./LatestData/LatestData";
// import ParallaxBanner from "./Banner/ParallaxBanner";

const Home = () => {
    return (
        <div className="bg-base-100">
            <Banner></Banner>
            {/* <ParallaxBanner></ParallaxBanner> */}
            <div className="lg:mx-24 lg:my-24 my-5 mx-5 lg:space-y-24 space-y-10">
                
                <HomeSurveys></HomeSurveys>
                <HowItWorks></HowItWorks>
                <LatestData></LatestData>
                <FaqSection></FaqSection>
            </div>
            
        </div>
    );
};

export default Home;
