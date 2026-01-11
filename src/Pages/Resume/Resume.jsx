import React from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaBookReader, FaCode, FaDownload } from "react-icons/fa";
import SkillGroup from "./SkillGroup";

const EducationTimeline = () => {
  const timelineData = [
    {
      year: "2025 (Sep-Nov)",
      title: "Frontend Industrial Attachment",
      institution: "BD Calling IT Ltd.",
      description:
        "Undergoing an industrial attachment focused on frontend development. Learning practical implementation of React, Tailwind CSS, and API integration in real-world projects.",
    },
    {
      year: "2022 - 2026 (Running)",
      title: "Diploma in Computer Engineering",
      institution: "Saic Institute And Management Technology",
      description:
        "Currently pursuing Diploma in Computer Engineering. Focused on web development, programming fundamentals, and modern frontend technologies.",
    },
    {
      year: "2021",
      title: "Secondary School Certificate (SSC)",
      institution: "National School and College",
      description:
        "Completed SSC in Science stream with a GPA of 3.44. Built strong foundations in mathematics and problem solving.",
    },
  ];

  const skills = {
    frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React Js", "Next Js"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vite"],
    softSkills: ["Teamwork", "Communication", "Problem Solving"],
  };

  return (
    <div className="px-10 py-16 rounded-lg">
      <div data-aos="fade-right">
        <h2 className="text-4xl font-medium">Resume</h2>
        <div className="border-b-[5px] inline-block w-14 text-[#6ef08e] rounded"></div>
      </div>

      {/* Objective Section */}
      <div className="bg-[#313945] p-6 rounded-2xl shadow-lg my-12" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-[#6ef08e] mb-3">
          Career Objective
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Motivated and passionate Frontend Developer with strong skills in
          React, Tailwind CSS, and JavaScript. Eager to learn modern
          technologies, solve real-world problems, and contribute to innovative
          web applications.
        </p>
      </div>

      <div className="mt-15" data-aos="fade-up" data-aos-delay="150">
        {/* Header */}
        <div className="flex items-center md:gap-3 gap-2 mb-8">
          <div className="w-12 h-12  text-md rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
            <BsPersonVcardFill />
          </div>
          <p className="text-base  text-white md:font-medium font-normal md:uppercase">
            Personal Information :
          </p>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:px-16 xl:px-0">
          <div className="flex gap-3">
            <span className="text-[#6ef08e] text-base font-light">Name</span>
            <p className="text-base font-light text-neutral-300">
              Rupok Hossain Siam
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">Gender</span>
            <p className="text-base font-light text-neutral-300">Male</p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">Age</span>
            <p className="text-base font-light text-neutral-300">
              20 years old.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">Status</span>
            <p className="text-base font-light text-neutral-300">Single</p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">City</span>
            <p className="text-base font-light text-neutral-300">Dhaka</p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">
              Nationality
            </span>
            <p className="text-base font-light text-neutral-300">Bangladesh</p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">
              Full Time
            </span>
            <p className="text-base font-light text-neutral-300">Available</p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">Phone</span>
            <p className="text-base font-light text-neutral-300">01636755280</p>
          </div>
          <div className="flex gap-4">
            <span className="text-[#6ef08e] text-base font-light">Email</span>
            <p className="text-base font-light text-neutral-300">
              rh.siam999@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-15">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
          <div className="w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
            <FaBookReader />
          </div>
          <p className="text-base text-white font-medium uppercase">
            Education :
          </p>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
        
        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div key={index} className="relative mb-16" data-aos="fade-up" data-aos-delay={index * 200}>
            {/* Dot */}
            <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#6ef08e] rounded-full border-4 border-gray-800 shadow-[0_0_10px_#6ef08e80] z-10"></div>

            {/* Card */}
            <div
              className={`w-full sm:w-[calc(50%-2rem)] p-5 bg-[#313945] cursor-pointer rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#6ef08e80] hover:border-l-4 hover:border-[#6ef08e] ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              }`}
            >
              <span className="text-[#6ef08e] font-semibold text-sm">
                {item.year}
              </span>
              <h3 className="md:text-lg text-base font-semibold text-white md:mt-1 my-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2 italic">
                {item.institution}
              </p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="md:pt-14 pt-4" >
        <div className="flex items-center gap-3 mb-8" data-aos="fade-right">
          <div className="w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
            <FaCode />
          </div>
          <p className="text-base text-white font-medium uppercase">Skills :</p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8" data-aos="fade-up" data-aos-delay="150">
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Tools & Technologies" items={skills.tools} />
          <SkillGroup title="Soft Skills" items={skills.softSkills} />
        </div>
      </div>

      {/* Download CV Button */}
      <div className="text-center mt-12" data-aos="zoom-in">
        <a
          href="/cv/siam.cv.pdf"
          download

          className="px-6 py-3 border border-[#6ef08e] text-[#6ef08e] font-medium rounded-lg hover:bg-[#7cf03d]/10 transition-all inline-flex items-center justify-center gap-2"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </div>
  );
};

export default EducationTimeline;
