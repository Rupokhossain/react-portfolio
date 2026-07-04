import React from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaBookReader, FaCode, FaDownload } from "react-icons/fa";
import SkillGroup from "./SkillGroup";

const EducationTimeline = () => {
  const timelineData = [
    {
      year: "2025 (3 Months)",
      title: "Frontend Industrial Attachment",
      institution: "BD Calling IT Ltd.",
      description:
        "Completed 3 months of intensive industrial training focused on real-world React.js projects, API integration, and team collaboration using Git/GitHub.",
      type: "experience",
    },
    {
      year: "2022 - 2026",
      title: "Diploma in Computer Engineering",
      institution: "SAIC Institute of Management & Technology",
      description:
        "Successfully completed Diploma in Computer Engineering with a CGPA of 3.46. Focused on web development, database management, and software engineering fundamentals.",
      type: "education",
    },
    {
      year: "2021",
      title: "Secondary School Certificate (SSC)",
      institution: "National School and College",
      description:
        "Completed SSC in Science stream with a GPA of 3.44. Built strong foundations in mathematics and logical problem-solving.",
      type: "education",
    },
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 85 },
    ],
    backend: [
      { name: "Node & Express", level: 60 },
      { name: "TypeScript", level: 55 },
      { name: "PostgreSQL/SQL", level: 50 },
      { name: "Prisma (ORM)", level: 45 },
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma to Code", level: 75 },
      { name: "Vite", level: 80 },
    ],
  };
  return (
    <div className="px-6 md:px-10 md:py-24 lg:py-16 rounded-lg">
      <div data-aos="fade-right">
        <h2 className="text-4xl font-medium">Resume</h2>
        <div className="border-b-[5px] inline-block w-14 text-[#6ef08e] rounded"></div>
      </div>

      {/* Objective Section */}
      <div
        className="relative bg-[#1e2530] border-l-4 border-[#6ef08e] p-6 md:p-10 rounded-r-2xl shadow-2xl my-8 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">🚀</span>
          <h3 className="text-2xl font-bold text-[#6ef08e] tracking-widest uppercase">
            Career Objective
          </h3>
        </div>

        <p className="text-gray-400 leading-8 text-base md:text-lg font-light tracking-wide">
          "A results-driven{" "}
          <span className="text-white font-medium">Frontend Developer</span>{" "}
          transitioning into{" "}
          <span className="text-white font-medium">Full-Stack development</span>
          . Currently, I am deepening my expertise by mastering{" "}
          <span className="text-[#6ef08e] font-medium bg-[#6ef08e]/5 px-1 rounded">
            Node.js, Express, and TypeScript
          </span>{" "}
          to build robust backend services. I am passionate about database
          management using{" "}
          <span className="text-[#6ef08e] font-medium bg-[#6ef08e]/5 px-1 rounded">
            PostgreSQL and SQL
          </span>
          , leveraging{" "}
          <span className="text-[#6ef08e] font-medium bg-[#6ef08e]/5 px-1 rounded">
            Prisma ORM
          </span>{" "}
          to create scalable and efficient data architectures. My goal is to
          build high-performance, end-to-end web applications that solve complex
          real-world problems."
        </p>
      </div>

      <div className="mt-15" data-aos="fade-up" data-aos-delay="150">
        {/* Header */}
        <div className="flex items-center md:gap-3 gap-2 mb-8">
          <div className="w-12 h-12  text-md rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
            <BsPersonVcardFill />
          </div>
          <p className="text-xl  text-white md:font-semibold font-normal md:uppercase">
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
        <div className="flex items-center gap-3 mb-12" data-aos="fade-right">
          <div className="w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
            <FaBookReader />
          </div>
          <div>
            <p className="text-xl text-white font-semibold uppercase tracking-widest">
              Experience & Education
            </p>
            <div className="h-1 w-12 bg-[#6ef08e] mt-1"></div>
          </div>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[90%] w-0.5 bg-gray-700"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-between items-center w-full"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Dot */}
              <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#6ef08e] rounded-full border-4 border-[#1e2530] z-10 shadow-[0_0_10px_#6ef08e]"></div>

              {/* Card */}
              <div
                className={`w-full md:w-[45%] p-6 bg-[#1e2530] border border-gray-800 rounded-2xl shadow-xl transition-all duration-300 hover:border-[#6ef08e]/50 hover:shadow-[0_0_20px_rgba(110,240,142,0.1)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[#6ef08e] font-mono text-xs px-2 py-1 bg-[#6ef08e]/10 rounded">
                    {item.year}
                  </span>
                  {item.type === "experience" && (
                    <span className="text-[10px] text-white bg-blue-600 px-2 py-1 rounded uppercase font-bold">
                      Work
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#6ef08e] text-sm italic font-medium mb-4">
                  {item.institution}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="md:pt-14 pt-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10" data-aos="fade-right">
          <div className="w-12 h-12 text-lg rounded-xl shadow-2xl cursor-pointer hover:scale-105 duration-300 transition-all text-[#6ef08e] bg-[#2b2b2c] flex justify-center items-center">
            <FaCode size={22} />
          </div>
          <p className="text-xl text-white font-bold uppercase tracking-widest">
            Technical Skills
          </p>
        </div>

        <div
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Frontend Group */}
          <SkillGroup
            title="Frontend Expertise"
            items={skills.frontend}
            color="#6ef08e"
          />

          {/* Backend Group (Learning) */}
          <SkillGroup
            title="Backend & DB"
            items={skills.backend}
            color="#6ef08e"
            isLearning={true}
          />

          {/* Tools Group */}
          <SkillGroup
            title="Tools & Tech"
            items={skills.tools}
            color="#6ef08e"
          />
        </div>
      </div>

      {/* Download CV Button */}
      <div className="text-center mt-12" data-aos="zoom-in">
        <a
          href="/cv/Rupok_Hossain_Siam_CV.pdf"
          download
          className="w-full sm:w-auto
      px-6 sm:px-8
      py-3
      border-2 border-[#6ef08e]
      text-[#6ef08e]
      font-bold
      rounded-xl
      hover:bg-[#6ef08e]
      hover:text-[#1e2530]
      transition-all duration-300
      inline-flex items-center justify-center gap-2
      shadow-[0_0_15px_rgba(110,240,142,0.2)] mb-12 md:mb-0"
        >
          <FaDownload /> Download CV
        </a>
      </div>
    </div>
  );
};

export default EducationTimeline;
