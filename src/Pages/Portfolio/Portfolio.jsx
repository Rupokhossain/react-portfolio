import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const projectsData = [
  {
    number: "01",
    title: "Nested E-Commerce",
    description:
      "A modern and responsive landing page for an Italian E-commerce. Built with a focus on clean UI, engaging animations, and a seamless user experience.",
    tech: ["JavaScript", "Tailwind", "ReactJs"],
    imageUrl: "/src/assets/images/nested-e-commerce.png",
    liveLink: "https://tailwind-react-react-router-project.vercel.app/",
    githubLink:
      "https://github.com/Rupokhossain/Tailwind-react-react-router---project",
  },
  {
    number: "02",
    title: "Blog Site",
    description:
      "A complete admin dashboard for an e-commerce platform. Features include data visualization, order management, and product tracking. Built using React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Javascript.js"],
    imageUrl: "/src/assets/images/blog-site.png",

    liveLink: "https://blog-site-brown-chi.vercel.app/",
    githubLink: "https://github.com/Rupokhossain/Blog-Site",
  },
  // {
  //   number: "03",
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website to showcase my skills and projects. Designed to be fast, elegant, and fully responsive across all devices, with smooth animations.",
  //   tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
  //   imageUrl: "https://i.imgur.com/xT5a3v6.png", // আপনার প্রজেক্টের ছবির লিঙ্ক দিন
  //   liveLink: "#",
  //   githubLink: "#",
  // },
];

const LatestProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  // Refresh AOS whenever currentIndex changes
  useEffect(() => {
    AOS.refresh();
  }, [currentIndex]);

  const currentProject = projectsData[currentIndex];

  return (
    <div className="bg-[#21262f] text-white px-10 py-16 rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          data-aos="fade-right"
          className="relative inline-block md:mb-12 mb-8"
        >
          <h2 className="md:text-4xl text-3xl font-medium">
            Latest
            <span className="text-green-400"> Project</span>
          </h2>
          <div className="border-b-[5px] inline-block w-14 text-[#6ef08e] rounded"></div>
          {/* <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-10 h-10 bg-blue-600 rounded-md z-0"></div> */}
        </div>

        {/* Content*/}
        <div className="flex flex-col lg:flex-row items-center lg:gap-12 gap-8">
          {/* left side */}
          <div
            className="lg:w-1/2 w-full"
            data-aos="fade-right"
            data-aos-delay="150"
        key={currentIndex}

          >
            <p data-aos="fade-up" data-aos-delay="100" className="md:text-8xl text-6xl font-bold text-transparent [-webkit-text-stroke:1px_#4b5563] mb-4">
              {currentProject.number}
            </p>
            <h3 data-aos="fade-up" data-aos-delay="200" className="md:text-3xl text-xl font-semibold mb-4">
              {currentProject.title}
            </h3>
            <p data-aos="fade-up" data-aos-delay="300" className="text-gray-400  mb-6">{currentProject.description}</p>
            <p data-aos="fade-up" data-aos-delay="400" className="text-green-400 font-semibold mb-6">
              {currentProject.tech.join(",  ")}
            </p>
            <hr className="border-gray-600 mb-6" />
            <div className="flex items-center gap-4">
              <a
                href={currentProject.liveLink}
                className="md:w-12 md:h-12 w-10 h-10 bg-[#313945] rounded-full flex justify-center items-center text-xl hover:bg-green-400 hover:text-gray-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </a>
              <a
                href={currentProject.githubLink}
                className="md:w-12 md:h-12 w-10 h-10 bg-[#313945] rounded-full flex justify-center items-center text-xl hover:bg-green-400 hover:text-gray-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* right side */}
          <div   className="lg:w-1/2 w-full bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105 will-change-transform">
            <div  key={currentIndex} data-aos="fade-left" data-aos-delay="300">
              <img
                src={currentProject.imageUrl}
                alt={currentProject.title}
                className="w-full h-48 sm:h-56 lg:h-64  object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* navigate btn*/}
        <div className="flex justify-center lg:justify-end gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 border-2 cursor-pointer border-gray-600 rounded-md flex justify-center items-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 border-2 cursor-pointer border-green-400 rounded-md flex justify-center items-center text-green-400 hover:bg-green-400 hover:text-gray-900 transition-colors duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
