import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const HowItWorks = () => {
    return (
        <div className=" card mx-5 bg-base-100 rounded-xl p-10  space-y-24">
            <div className=" lg:flex-row   flex flex-col justify-center gap-10  items-center  ">
            <div className="space-y-6 ">
                <h1 className="text-4xl">How FeedbackPro Works</h1>
            <p>Getting started with FeedbackPro is simple and straightforward. First, choose the category that fits your needs—whether it’s customer satisfaction, employee engagement, market research, product feedback, or event feedback. Next, customize your survey with our easy-to-use tools, allowing you to create questions tailored to your specific goals. Once your survey is ready, share it with your audience through various channels. As responses come in, our platform provides real-time analytics to help you interpret the data and gain valuable insights. With FeedbackPro, you can make informed decisions based on direct feedback, driving improvements and achieving your objectives effectively.</p>
            <Link to="/surveys"><button className="btn mt-8">Explore Now</button></Link>
            </div>
            <img data-aos="fade-up" data-aos-duration="3000" className="lg:min-w-[600px]  rounded-xl" src="https://i.postimg.cc/MTpc8MxN/luke-chesser-JKUTr-J4v-K00-unsplash.jpg" alt="" />
        </div>

            <div className=" lg:flex-row-reverse flex flex-col justify-center items-center gap-10   bg-base-100 ">
            <div className="space-y-8 ">
                <h1 className="text-4xl">Getting Started with FeedbackPro</h1>
            <p>Using FeedbackPro is a breeze! Simply select the survey category that suits your needs—be it customer satisfaction, employee engagement, market research, product feedback, or event feedback. Customize your survey with our user-friendly interface, adding questions that are relevant to your goals. Share your survey effortlessly across multiple platforms to reach your audience. As responses roll in, access our real-time analytics to gain deep insights and actionable data. With FeedbackPro, you can efficiently gather feedback, understand your audience, and make informed decisions to drive success.</p>
            <Link to="/signUp"> <button className="btn mt-8">Join Now</button></Link>
            </div>
            <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-[600px]  rounded-xl" src="https://i.postimg.cc/t7QC7YQX/annie-spratt-h-Cb3l-IB8-L8-E-unsplash.jpg" alt="" />
        </div>
        </div>
        
    );
};

export default HowItWorks;