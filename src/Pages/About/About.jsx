import img1 from "../../../public/icon/pngwing.com (11).png";
import img2 from "../../../public/icon/pngwing.com (10).png";
import img3 from "../../../public/icon/pngwing.com (12).png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const About = () => {
    return (
        <div className="lg:mx-24 my-10 mx-5">
            <div data-aos="fade-down" data-aos-duration="1500">
                <h1 className="text-4xl font-semibold"> About Us</h1>
                <p>
                    Welcome to Feedback Pro, your go-to platform for insightful
                    surveys and data collection. Our mission is to empower
                    individuals and businesses with the tools they need to make
                    informed decisions, improve services, and understand their
                    audience better. Whether you are looking to gauge customer
                    satisfaction, measure employee engagement, or gather crucial
                    market research, we have got you covered.
                </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="flex mt-10 lg:flex-row flex-col">
                <img className="lg:max-w-[800px] max-w-500" src={img1} alt="" />
                <div className="">
                    <h1 className="text-4xl font-semibold">
                        Our Survey Categories
                    </h1>

                    <h1 className="text-2xl font-semibold mt-8">
                        Customer Satisfaction:
                    </h1>
                    <p>
                        Understand what your customers think about your
                        products, services, and overall experience. Our surveys
                        help you assess customer opinions and satisfaction
                        levels to improve and innovate.
                    </p>

                    <h1 className="text-2xl font-semibold mt-8">
                        Employee Engagement
                    </h1>
                    <p>
                        Create a thriving workplace culture by measuring
                        employee satisfaction and engagement. Discover insights
                        into your teams morale and work environment to foster a
                        positive and productive atmosphere.
                    </p>

                    <h1 className="text-2xl font-semibold mt-8">
                        Market Research
                    </h1>
                    <p>
                        Stay ahead of the competition by gathering data on
                        market trends, consumer behavior, and competitive
                        analysis. Our market research surveys provide the
                        insights you need to navigate your industry
                        successfully.
                    </p>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col lg:flex-row-reverse mt-10">
                <img className="lg:max-w-[600px] max-w-500" src={img2} alt="" />
                <div>
                    <h1 className="text-2xl font-semibold mt-8">
                        Product Feedback
                    </h1>
                    <p>
                        Enhance your products by collecting feedback on
                        features, usability, and customer preferences. Use this
                        valuable information to refine your offerings and meet
                        customer expectations.
                    </p>

                    <h1 className="text-2xl font-semibold mt-8">
                        Event Feedback
                    </h1>
                    <p>
                        Ensure your events, conferences, and webinars are
                        memorable and impactful. Evaluate attendee experiences
                        and satisfaction to continuously improve your event
                        planning and execution.
                    </p>

                    <h1 className="text-2xl font-semibold mt-8">
                        Brand Awareness
                    </h1>
                    <p>
                        Measure how well your brand is recognized and perceived
                        in the market. Our surveys help you understand brand
                        loyalty and identify opportunities to strengthen your
                        brand presence.
                    </p>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000">
                <h1 className="text-4xl font-semibold">User Types</h1>

                <h1 className="text-2xl font-semibold mt-8">User</h1>
                <p>
                    As a User, you can participate in surveys by casting your
                    vote on various topics. Your input is valuable in shaping
                    the outcomes and providing insights to the survey creators.
                </p>

                <h1 className="text-2xl font-semibold mt-8">Pro-User</h1>
                <p>
                    Pro-Users have all the privileges of regular Users, with the
                    added ability to leave comments on surveys. This allows for
                    a deeper engagement and discussion, providing more nuanced
                    feedback.
                </p>

                <h1 className="text-2xl font-semibold mt-8">Surveyer</h1>
                <p>
                    Surveyers are the creators of surveys. With the ability to
                    post surveys featuring yes/no voting options, Surveyers play
                    a crucial role in gathering data and insights from our
                    community. The results are transparent and visible to all
                    participants, fostering an open and collaborative
                    environment.
                </p>
            </div>

                <img data-aos="zoom-in" data-aos-duration="2000" className="lg:max-w-[600px] max-w-500 mx-auto" src={img3} alt="" />
            <p>
                Join us at FeedbackPro and be part of a dynamic community that
                values your opinions and feedback. Together, we can create
                better experiences, products, and services for everyone.
            </p>
        </div>
    );
};

export default About;
