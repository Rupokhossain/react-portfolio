import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink, FiX } from "react-icons/fi";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gadget from "../../assets/images/gadget.png";
import e_commerce from "../../assets/images/e-commerce.png";
import modern from "../../assets/images/modern.png";

const projectsData = [
  {
    number: "01",
    title: "E-Commerce Landing Page",
    description: "A modern and responsive landing page for an Italian E-commerce. Built with a focus on clean UI, engaging animations, and a seamless user experience.",
    tech: ["JavaScript", "Tailwind CSS", "ReactJs"],
    imageUrl: e_commerce,
    liveLink: "https://react-ecommerce-orcin-three.vercel.app/",
    githubLink: "https://github.com/Rupokhossain/React_E-commerce",
    challenges: "Implementing a smooth scrolling experience and making the complex product grid fully responsive across all screen sizes was a significant challenge.",
    futurePlans: "I plan to add a product filtering system and a shopping cart with local storage persistence."
  },
  {
    number: "02",
    title: "ElectraHub – Gadget Store",
    description: "A high-performance e-commerce platform built with Next.js 15. Features dynamic state management and integrated social authentication.",
    tech: ["Next.js 15", "Redux Toolkit", "Tailwind CSS", "DaisyUI"],
    imageUrl: gadget,
    liveLink: "https://gadget-nextjs.vercel.app/",
    githubLink: "https://github.com/Rupokhossain/gadget_nextjs",
    challenges: "Handling server-side and client-side state synchronization using Redux Toolkit in Next.js 15 while maintaining fast performance was tricky.",
    futurePlans: "Integrating a real payment gateway (Stripe) and a full-fledged backend using Node.js and PostgreSQL."
  },
  {
    number: "03",
    title: "Modern Business Landing Page",
    description: "A professional landing page designed for business startups. Focuses on speed, elegance, and conversion-optimized layout.",
    tech: ["React Js", "Tailwind CSS", "Framer Motion"],
    imageUrl: modern,
    liveLink: "https://react-landing-page-one-blond.vercel.app/",
    githubLink: "https://github.com/Rupokhossain/react_landing_page",
    challenges: "Achieving complex entrance animations with Framer Motion without affecting the overall page load speed and SEO performance.",
    futurePlans: "Adding a dynamic blog section and multi-language support to reach a global audience."
  },
];

const LatestProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const currentProject = projectsData[currentIndex];

  return (
    <div id="portfolio" className="bg-[#21262F] text-white px-6 md:px-10 md:py-24 lg:py-16 rounded-2xl min-h-[700px] transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-right" className="relative inline-block md:mb-12 mb-8">
          <h2 className="md:text-4xl text-3xl font-bold">
            Latest <span className="text-[#6ef08e]">Projects</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#6ef08e] mt-2 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-12 gap-8">
          {/* Left Side - Project Info */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1 min-h-[480px] md:min-h-[520px]" key={`info-${currentIndex}`} data-aos="fade-up" >
            <p className="md:text-8xl text-6xl font-bold text-transparent [-webkit-text-stroke:1px_#4b5563] mb-4">
              {currentProject.number}
            </p>
            <h3 className="md:text-4xl text-2xl font-bold mb-4 text-white">
              {currentProject.title}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {currentProject.description}
            </p>

            {/* View More Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mb-8 px-6 py-2.5 bg-[#6ef08e] text-black font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105 cursor-pointer duration-300"
            >
              View More / Details
            </button>

            <p className="text-[#6ef08e] font-mono text-sm mb-6 flex flex-wrap gap-2">
              {currentProject.tech.map(t => <span key={t} className="bg-[#6ef08e]/10 px-2 py-1 rounded">#{t}</span>)}
            </p>
            
            <hr className="border-gray-800 mb-6" />
            
            <div className="flex items-center gap-6">
              <a href={currentProject.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#6ef08e] transition-all">
                <FiExternalLink size={20} /> <span className="text-sm">Live Demo</span>
              </a>
              <a href={currentProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#6ef08e] transition-all">
                <FaGithub size={20} /> <span className="text-sm">Client Repo</span>
              </a>
            </div>
          </div>

          {/* Right Side - Project Image */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 cursor-pointer" key={`img-${currentIndex}`} data-aos="zoom-in">
            <div className="relative group overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
              <img
                src={currentProject.imageUrl}
                alt={currentProject.title}
                className="w-full h-[250px] md:h-[400px] object-fill transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center lg:justify-start gap-4 mt-12 mb-10 md:mb-0">
          <button onClick={handlePrev} className="p-3 border border-gray-700 rounded-xl hover:border-[#6ef08e] hover:text-[#6ef08e] transition-all cursor-pointer">
            <FaChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="p-3 border-2 border-[#6ef08e] bg-[#6ef08e] text-black rounded-xl hover:bg-white hover:border-white transition-all shadow-[0_0_15px_#6ef08e40] cursor-pointer">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* --- DETAILED PROJECT MODAL (Requirement #9) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="bg-[#1e2530] border border-gray-800 p-6 md:p-10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-white transition-colorsc cursor-pointer">
              <FiX />
            </button>
            
            <h2 className="text-3xl font-bold text-[#6ef08e] mb-2">{currentProject.title}</h2>
            <div className="h-1 w-12 bg-[#6ef08e] mb-6"></div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-1 uppercase text-sm tracking-widest">Main Tech Stack:</h4>
                <p className="text-[#6ef08e] font-mono">{currentProject.tech.join(" • ")}</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-1 uppercase text-sm tracking-widest">Brief Description:</h4>
                <p className="text-gray-400 leading-relaxed">{currentProject.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-800">
                <div>
                  <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">⚠️ Challenges Faced</h4>
                  <p className="text-gray-400 text-sm italic">"{currentProject.challenges}"</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">🚀 Future Improvements</h4>
                  <p className="text-gray-400 text-sm italic">"{currentProject.futurePlans}"</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href={currentProject.liveLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 bg-[#6ef08e] text-black font-bold rounded-xl hover:shadow-[0_0_15px_#6ef08e80] transition-all">Live Project Link</a>
                <a href={currentProject.githubLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 border border-gray-700 text-white font-bold rounded-xl hover:bg-gray-800 transition-all">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestProjects;