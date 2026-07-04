import { FaDiscord, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import {
  FiActivity,
  FiBookOpen,
  FiMonitor,
  FiPenTool,
  FiServer,
  FiZap,
} from "react-icons/fi";

const About = () => {
  const items = [
    {
      icon: <FiMonitor />,
      title: "Frontend Development",
      desc: "Building responsive, modern web interfaces using React & Tailwind CSS.",
    },
    {
      icon: <FiPenTool />,
      title: "UI/UX Design",
      desc: "Creating clean, user-friendly designs with attention to detail and usability.",
    },
    {
      icon: <FiActivity />,
      title: "Web Design",
      desc: "Adding smooth, meaningful animations using Framer Motion and GSAP.",
    },
    {
      icon: <FiBookOpen />,
      title: "Learning & Growth",
      desc: "Constantly learning new frameworks and improving my JavaScript skills.",
    },
    {
      icon: <FiServer />,
      title: "API Integration & State Management",
      desc: "Connecting web applications to APIs and managing complex state using tools like Redux or Context API.",
    },

    {
      icon: <FiZap />,
      title: "Performance Optimization",
      desc: "Improving web performance through code splitting, lazy loading, and optimizing Core Web Vitals.",
    },
  ];



  return (
    <div className="md:py-24 lg:py-16 py-8 md:px-10 px-4 rounded-lg">
      <div data-aos="fade-right">
        <h2 className="text-4xl font-medium">About Me</h2>
        <div className="border-b-[5px] inline-block w-14 text-[#6ef08e] rounded"></div>
      </div>

      <div className="md:mt-10 mt-7" data-aos="fade-up">
        <div className="text-gray-400 leading-8 tracking-widest space-y-4">
          <p>
            Hi, I'm{" "}
            <span className="text-[#6ef08e] font-medium text-lg">
              Rupok Hossain Siam
            </span>
            , a passionate frontend developer from Bangladesh. My journey into
            the world of programming started with a simple curiosity about how
            the internet works. What began as a hobby of tweaking HTML tags
            quickly evolved into a dedicated career path where I now build
            modern, responsive, and highly functional web applications.
          </p>

          <p>
            I truly enjoy the process of turning a blank canvas into a living,
            breathing user interface. I specialize in{" "}
            <span className="text-gray-200">
              React, Tailwind CSS, and JavaScript
            </span>
            . Beyond just writing code, I love solving complex logical problems
            and optimizing web performance to ensure the best possible user
            experience. For me, web development isn't just a job; it's a way of
            bringing creative ideas to life.
          </p>

          <p>
            When I'm not coding or debugging, you'll probably find me on a
            <span className="font-bold text-gray-200"> Football </span> field or exploring new places through <span className="font-bold text-gray-200">Traveling</span>. I
            also have a keen interest in <span className="font-bold text-gray-200">Photography </span>, which helps me look at
            the world from different perspectives. I believe that a healthy
            balance between technology and creative hobbies makes me a better
            developer and a more well-rounded individual.
          </p>
        </div>
      </div>

      <div className="md:mt-16 mt-12" data-aos="fade-left">
        <h2 className="md:text-4xl text-3xl font-semibold mb-8">
          What I’m Doing
        </h2>
        <div
          data-aos="fade-down"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {items.map((item) => (
            <div
              className="bg-[#313945] cursor-pointer transition-all 
                hover:duration-300 
                ease-out p-6 rounded-2xl flex flex-col gap-3 shadow-lg hover:shadow-[#7cf03d]/30 hover:-translate-y-1 mb-4 md:mb-0"
            >
              <div className="text-[#7cf03d] text-3xl">{item.icon}</div>
              <h3 className="md:text-lg text-base font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
