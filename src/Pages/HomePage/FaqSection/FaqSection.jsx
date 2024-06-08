import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const FaqSection = () => {
    return (

        <div className="flex justify-between gap-5   lg:flex-row flex-col">
            <div className="max-w-[700px] space-y-5">
                <h1 className="text-4xl">Frequently Asked Questions</h1>
                <p>Welcome to the FeedbackPro FAQ section! Here you will find answers to common questions about our survey tool, including how to create and distribute surveys, the types of surveys you can make, and how to view results. Whether you are a small business owner or part of a larger organization, FeedbackPro is designed to help you gather and analyze valuable insights with ease. If you have any additional questions, do not hesitate to reach out to our support team. We are here to help you make the most of your feedback and drive success!</p>
            </div>
            <div className="space-y-5">
            <div data-aos="flip-down" data-aos-duration="2000" className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Q: What is FeedbackPro?
                </div>
                <div className="collapse-content">
                    <p>A: FeedbackPro is a versatile survey tool that allows you to create, distribute, and analyze surveys across various categories such as customer satisfaction, employee engagement, market research, product feedback, and event feedback.</p>
                </div>
            </div>
            <div data-aos="flip-down" data-aos-duration="2000" className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Q: How do I create a survey on FeedbackPro?
                </div>
                <div className="collapse-content">
                    <p>A: You can create surveys for customer satisfaction, employee engagement, market research, product feedback, and event feedback, each with customizable questions to suit your specific needs.</p>
                </div>
            </div>
            <div data-aos="flip-down" data-aos-duration="2000" className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Q: Can I see the survey results in real-time on FeedbackPro?
                </div>
                <div className="collapse-content">
                    <p>A: Yes, FeedbackPro provides real-time analytics, allowing you to view and analyze responses as they come in, so you can quickly gain insights and make informed decisions.</p>
                </div>
            </div>
            <div data-aos="flip-down" data-aos-duration="2000" className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Q: Is FeedbackPro suitable for small businesses?
                </div>
                <div className="collapse-content">
                    <p>A: Absolutely! FeedbackPro is designed to be user-friendly and scalable, making it an excellent tool for small businesses looking to gather valuable feedback and improve their operations.</p>
                </div>
            </div>
            <div data-aos="flip-down" data-aos-duration="2000" className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Q: How secure is my data on FeedbackPro?
                </div>
                <div className="collapse-content">
                    <p>A: Your data security is our top priority. FeedbackPro uses advanced encryption and security measures to ensure that your survey data is protected and confidential.</p>
                </div>
            </div>
            <div data-aos="flip-down" data-aos-duration="2000" className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                Q: How much does it cost to use FeedbackPro?
                </div>
                <div className="collapse-content">
                    <p>A: FeedbackPro offers various pricing plans to suit different needs and budgets, including a free tier with basic features and premium plans with advanced capabilities. Visit our pricing page for detailed information.</p>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default FaqSection;
