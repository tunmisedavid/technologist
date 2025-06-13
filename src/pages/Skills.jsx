import { useInView } from "motion/react";
import { useRef } from "react";

import patientShielPic from "../assets/patient-image.avif"
import equipManagementPic from "../assets/equipment.webp";
import hardwareMaintenancePic from "../assets/Hardware-Maintenance.jpeg";
import machineLearningImg from "../assets/machine.jpg";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
    ref={ref}
      className={`${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20"
      } transition duration-[1.5s] mt-2  md:mt-20 xl:mt-24  max-w-7xl w-10/12 lg:w-9/12 m-auto font-primary text-primaryBrand`}
    >
      <p className="font-bold text-primaryBrand mb-4 md:mb-6 text-3xl md:text-4xl">
        Skills
      </p>
      <div className="grid md:grid-cols-2 gap-4 xl:gap-8">
        <SkillsComp
          skilsImg={patientShielPic}
          SkillsPicAlt="patient shielding image"
          skillsHeader="Patient shielding techniques"
          skillsInfo="The practice of placing radiation protective shielding on patients ('in contact') in order to reduce the dose to certain radiosensitive organs for diagnostic X-ray examination,"
        />
        <SkillsComp
          skilsImg={equipManagementPic}
          SkillsPicAlt="Equipment Management image"
          skillsHeader="Equipment Management techniques"
          skillsInfo="Equipment safety encompasses the practices, measures, and standards
      designed to ensure the well-being of individuals interacting with
      equipment."
        />
        <SkillsComp
          skilsImg={hardwareMaintenancePic}
          SkillsPicAlt="Hardware maintenance image"
          skillsHeader="Hardware mentainance techniques"
          skillsInfo="Hardware maintenance encompasses the activities involved in keeping physical computer components and equipment in optimal working order."
        />
        <SkillsComp
          skilsImg={machineLearningImg}
          SkillsPicAlt="Machine Learning image"
          skillsHeader="Machine Learning"
          skillsInfo="Machine learning (ML) is a field within artificial intelligence (AI) that focuses on enabling computers to learn from data without being explicitly programmed,"
        />
      </div>
    </div>
  );
} 

const SkillsComp = ({ skilsImg, SkillsPicAlt, skillsHeader, skillsInfo }) => {
  return (
    <div className="flex flex-col gap-2 xl:gap-4 shadow bg-gray-100 rounded-2xl p-4 font-primary">
      <img className="h-32 object-cover" src={skilsImg} alt={SkillsPicAlt} />
      <p className="font-bold md:text-xl lg:text-3xl">{skillsHeader}</p>
      <p className="font-normal text-xs md:text-sm lg:text-base w-[230px] md:w-[275px] lg:w-[350px] xl:w-[420px] ">
        {skillsInfo}
      </p>
    </div>
  );
};

export default Skills;