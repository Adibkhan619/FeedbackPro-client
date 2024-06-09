import img from "../../../public/icon/pngwing.com (13).png"

const Contact = () => {
    return (
        <div className="lg:mx-24 mx-5 my-10 flex items-center lg:flex-row flex-col gap-10">
<div>               
    <h1 className="text-5xl font-bold my-5">Contact Us</h1>
        <p>We would love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us through any of the methods below, and we will get back to you as soon as possible.</p>

            <h1 className="text-3xl font-bold mt-5">Get in Touch</h1>
<p className="font-bold">Email:</p>
<p>For general inquiries, support, or feedback, please email us at support@feedbackPro.com.</p>

<p className="font-bold">Phone:</p>
<p>You can also call us at +1 (123) 456-7890. Our support team is available Monday to Friday, from 9 AM to 5 PM (EST).</p>

<h1 className="text-3xl font-semibold mt-5">Address:</h1>
<p>Visit us or send mail to our office at: </p>
<p>1234 Survey Lane </p>
<p>Suite 567</p>
<p>City, State, ZIP Code</p>
<p>Country</p>

</div>

<img className="max-w-[400px] max-h-[400px] hidden lg:flex md:flex" src={img} alt="" />



        </div>
    );
};

export default Contact;