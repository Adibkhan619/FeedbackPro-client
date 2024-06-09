import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import { Autoplay, Navigation } from "swiper/modules";
import Slides from "./Slides";
// import { Fade } from "react-awesome-reveal";
import { EffectFade } from 'swiper/modules';

const Banner = () => {
    return (
        <>
        <div className=" mx-auto">
        <Swiper
          effect="fade"

            spaceBetween={0}

            // direction={'vertical'}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay,  EffectFade, Navigation]}
            className="mySwiper "
        >
            <SwiperSlide>
                <Slides image="https://i.postimg.cc/vmz1jLR5/nick-morrison-FHnnjk1-Yj7-Y-unsplash.jpg"  paragraph={'At FeedbackPro, we simplify the process of gathering meaningful insights. Whether you need to assess customer satisfaction, measure employee engagement, conduct market research, or collect product and event feedback, our intuitive survey tool helps you get the answers you need quickly and efficiently. Join us today and start turning feedback into action!'} text={'Your Ultimate Survey Solution!'}></Slides>
            </SwiperSlide>
            <SwiperSlide>
                <Slides image="https://i.postimg.cc/t7QC7YQX/annie-spratt-h-Cb3l-IB8-L8-E-unsplash.jpg" 
                paragraph={'At FeedbackPro, we simplify the process of gathering meaningful insights. Whether you need to assess customer satisfaction, measure employee engagement, conduct market research, or collect product and event feedback, our intuitive survey tool helps you get the answers you need quickly and efficiently. Join us today and start turning feedback into action!'} text={'Your Ultimate Survey Solution!'}></Slides>
            </SwiperSlide>
            <SwiperSlide>
                <Slides image="https://i.postimg.cc/MTpc8MxN/luke-chesser-JKUTr-J4v-K00-unsplash.jpg" paragraph={'At FeedbackPro, we simplify the process of gathering meaningful insights. Whether you need to assess customer satisfaction, measure employee engagement, conduct market research, or collect product and event feedback, our intuitive survey tool helps you get the answers you need quickly and efficiently. Join us today and start turning feedback into action!'} text={'Your Ultimate Survey Solution!'}></Slides>
            </SwiperSlide>
            <SwiperSlide>
                <Slides image="https://i.postimg.cc/rpc0QZH8/john-schnobrich-y-Fbyvp-EGHFQ-unsplash.jpg" paragraph={'At FeedbackPro, we simplify the process of gathering meaningful insights. Whether you need to assess customer satisfaction, measure employee engagement, conduct market research, or collect product and event feedback, our intuitive survey tool helps you get the answers you need quickly and efficiently. Join us today and start turning feedback into action!'} text={'Your Ultimate Survey Solution!'}></Slides>
            </SwiperSlide>
            <SwiperSlide>
                <Slides image="https://i.postimg.cc/28Z1mfRk/campaign-creators-e6n7uo-En-Yb-A-unsplash.jpg" paragraph={'At FeedbackPro, we simplify the process of gathering meaningful insights. Whether you need to assess customer satisfaction, measure employee engagement, conduct market research, or collect product and event feedback, our intuitive survey tool helps you get the answers you need quickly and efficiently. Join us today and start turning feedback into action!'} text={'Your Ultimate Survey Solution!'}></Slides>
            </SwiperSlide>
            <SwiperSlide>
                <Slides image="https://i.postimg.cc/Kjg8ZtWq/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg" paragraph={'At FeedbackPro, we simplify the process of gathering meaningful insights. Whether you need to assess customer satisfaction, measure employee engagement, conduct market research, or collect product and event feedback, our intuitive survey tool helps you get the answers you need quickly and efficiently. Join us today and start turning feedback into action!'} text={'Your Ultimate Survey Solution!'}></Slides>
            </SwiperSlide>
            <SwiperSlide>
                <Slides image="https://i.postimg.cc/26t5R00L/agence-olloweb-qfp4-Ud6-Fyg-unsplash.jpg" paragraph={'At FeedbackPro, we simplify the process of gathering meaningful insights. Whether you need to assess customer satisfaction, measure employee engagement, conduct market research, or collect product and event feedback, our intuitive survey tool helps you get the answers you need quickly and efficiently. Join us today and start turning feedback into action!'} text={'Your Ultimate Survey Solution!'}></Slides>
            </SwiperSlide>
            
        </Swiper>
    </div>
    </>
    );
};

export default Banner;
