import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mt-2 md:mt-20 xl:mt-24  max-w-7xl w-10/12 lg:w-9/12 m-auto font-primary text-primaryBrand flex flex-col md:flex-row md:items-center gap-8 ">
      <div className="">
        <p className="font-bold text-xl xl:text-3xl md:w-72 lg:w-96 xl:w-[540px]">
          Let's discuss something cool together
        </p>
        <div className="mt-4 flex gap-4 flex-col">
          <ContactDes icon={<MdEmail />} iconInfo="tech@gmail.com" />
          <ContactDes icon={<FaPhone />} iconInfo="+234 645 475 2376" />
          <ContactDes icon={<FaLocationDot />} iconInfo="62 street lagos" />
        </div>
      </div>
      <div className="border-2 border-[#FF6464] rounded-xl p-2 md:p-4">
        <p className="font-bold text-xl md:text-3x">i'm interested in..</p>
        <div className="mt-2 flex gap-2 flex-wrap"> 
          <button className="bg-[#FF6464] p-2 rounded text-white cursor-pointer" >
            Machine Learning
          </button>
          <button className="bg-[#FF6464] p-2 rounded text-white cursor-pointer" >
            Artificial
          </button>
          <button className="bg-[#FF6464] p-2 rounded text-white cursor-pointer ">
            Hardware Safety
          </button>
          <button className="bg-[#FF6464] p-2 rounded text-white cursor-pointer" >
            Equipments maitenance
          </button>
        </div>
        <form action="" className="mt-4 flex flex-col gap-4">
          {/* <label htmlFor="name">Your name</label> */}
          <input
            className="outline-none border-b-2 border-b-[#FF6464] h-8 cursor-pointer"
            placeholder="Your name"
            type="text"
            id="name"
            required
          />
          {/* <label htmlFor="name">Your name</label> */}
          <input
            className="outline-none border-b-2 border-b-[#FF6464] h-8 cursor-pointer"
            placeholder="Your email"
            type="text"
            id="name"
            required
          />
          {/* <label htmlFor="message">Your Message</label> */}
          <textarea
            className="outline-none border-b-2 border-b-[#FF6464] resize-none cursor-pointer"
            placeholder="Your message"
            id="message"
            required
          ></textarea>

          <button className="bg-[#FF6464] p-2 rounded text-white md:w-56 md:m-auto cursor-pointer" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactDes = ({ icon, iconInfo }) => {
  return (
    <div className="flex items-center gap-2 pl-2 h-8 w-48 rounded hover:bg-[#FF6464] hover:text-white font-medium cursor-pointer">
      <span className="">{icon}</span>
      <p>{iconInfo}</p>
    </div>
  );
};

export default Contact;
