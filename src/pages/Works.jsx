import FeaturedCards from "../components/FeaturedCards";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import designPic from "../assets/image-1.png";
import vibrntPic from "../assets/image-2.png";
import tipographyPic from "../assets/image-3.png";
import componentsPic from "../assets/components.png";

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className={`${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20"
      } transition duration-[1.5s] mt-2  md:mt-20 xl:mt-24  max-w-7xl w-10/12 lg:w-9/12 m-auto font-primary`}
    >
      <p className="font-bold text-primaryBrand mb-4 md:mb-6 text-3xl md:text-4xl">
        Work
      </p>
      <div className="flex flex-col gap-8">
        <FeaturedCards
          featureImg={designPic}
          featureImgAlt="dashboard picture"
          featureHead="Designing Dashboards"
          featureYr="2020"
          featureType="Dashboards"
          featureInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <FeaturedCards
          featureImg={vibrntPic}
          featureImgAlt="Illustration picture"
          featureHead="Vibrant Portraits of 2018"
          featureYr="2018"
          featureType="Illustration"
          featureInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <FeaturedCards
          featureImg={tipographyPic}
          featureImgAlt="Typography picture"
          featureHead="36 Days of Malayalam type"
          featureYr="2018"
          featureType="Typography"
          featureInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <FeaturedCards
          featureImg={componentsPic}
          featureImgAlt="Compnents picture"
          featureHead="Components"
          featureYr="2018"
          featureType="Compnents , Design"
          featureInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
};

export default Works;
