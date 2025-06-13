import FeaturedCards from "../components/FeaturedCards";
import RecentCard from "../components/RecentCardComponent";

import profilePic from "../assets/profile.png"

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Landing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div>
      <motion.div
        ref={ref}
        className={`${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20"
        } transition duration-[1.5s] mt-6 md:mt-20 xl:mt-24 pb-14 md:pb-16 max-w-7xl w-10/12 lg:w-9/12 m-auto flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between gap-8 md:gap-0`}
      >
        <div>
          <img
            className="w-40 md:w-52"
            src={profilePic}
            alt="profile picture"
          />
        </div>
        <div className="font-primary  flex flex-col gap-3 md:gap-4 lg:gap-5">
          <p className="font-bold text-primaryBrand text-3xl lg:text-4xl text-center md:leading-10 w-48 md:w-[300px] lg:w-[350px] m-auto md:ml-0 md:text-start">
            Hi, I am John, Creative Technologist
          </p>
          <p className="font-normal text-primaryBrand text-sm lg:text-base text-center md:text-start w-64 md:w-96 lg:w-[460px] m-auto md:ml-0 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <motion.button
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileTap={{
              scale: 1.1,
              rotate: "5deg",
            }}
            className="bg-[#FF6464] text-white font-primary font-medium rounded-[2px] md:rounded w-40 md:w-52 h-10 md:h-12 m-auto md:ml-0 md:text-xl "
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>
      <div className="bg-[#EDF7FA] ">
        <motion.div
          ref={ref2}
          className={`  ${
            isInView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20"
          } transition duration-[1.5s] font-primary py-6 md:py-10 max-w-7xl w-10/12 lg:w-9/12 m-auto`}
        >
          <div className="flex pb-3 md:pb-5 justify-center md:justify-between">
            <p className="text-primaryBrand font-normal text-lg md:text-xl">
              Recent posts
            </p>
            <p className="text-[#00A8CC] font-normal hidden md:block">
              View all
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-0 md:flex-row md:justify-between">
            <RecentCard
              info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
              year="12 Feb 2020 "
              work="design, Pattern"
              head="Making a design system from scratch"
            />
            <RecentCard
              info="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
              year="12 Feb 2020 "
              work="Figma, Icon Design"
              head="Creating pixel perfect icons in Figma"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={ref3}
        className={`${
          isInView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20"
        } transition duration-[1.5s] max-w-7xl w-10/12 lg:w-9/12 m-auto pt-6 md:pt-10 pb-4 md:pb-8`}
      >
        <p className="font-primary font-normal pb-4 md:pb-6 lg:pb-8 text-lg md:text-xl text-primaryBrand text-center md:text-start">
          Feaured works
        </p>
        <div className="flex flex-col gap-8">
          <FeaturedCards
            featureImg="src/assets/image-1.png"
            featureImgAlt="dashboard picture"
            featureHead="Designing Dashboards"
            featureYr="2020"
            featureType="Dashboards"
            featureInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeaturedCards
            featureImg="src/assets/image-2.png"
            featureImgAlt="Illustration picture"
            featureHead="Vibrant Portraits of 2018"
            featureYr="2018"
            featureType="Illustration"
            featureInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeaturedCards
            featureImg="src/assets/image-3.png"
            featureImgAlt="Typography picture"
            featureHead="36 Days of Malayalam type"
            featureYr="2018"
            featureType="Typography"
            featureInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </motion.div>
      {/* <div className="border border-t border-[#E0E0E0] max-w-7xl w-10/12 lg:w-9/12 m-auto"></div> */}
    </div>
  );
};

export default Landing;
