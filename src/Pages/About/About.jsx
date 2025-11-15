import { FaDiscord, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiActivity, FiBookOpen, FiMonitor, FiPenTool, FiServer, FiZap } from "react-icons/fi";

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


  //   {
  //     href: "https://github.com",
  //     icon: <FaGithub />,
  //     label: "GitHub",
  //   },
  //   {
  //     href: "https://linkedin.com",
  //     icon: <FaLinkedinIn />,
  //     label: "LinkedIn",
  //   },
  //   {
  //     href: "https://discord.com",
  //     icon: <FaDiscord />,
  //     label: "Discord",
  //   },
  //   {
  //     href: "https://youtube.com",
  //     icon: <FaYoutube />,
  //     label: "YouTube",
  //   },
  // ];

  return (
    <div className="py-16 px-10 rounded-lg">
      <div>
        <h2 className="text-4xl font-medium">About Me</h2>
        <div className="border-b-[5px] inline-block w-14 text-[#6ef08e] rounded"></div>
      </div>

      <div className="mt-10">
        <p className="text-gray-400 leading-8 tracking-widest">
          Hi, I'm{" "}
          <span className="text-[#6ef08e] font-medium">Rupok Hossain Siam</span>
          , a passionate frontend developer dedicated to building modern,
          responsive, and user-friendly websites. I enjoy combining design and
          logic to create interfaces that look great and work smoothly. I mostly
          work with{" "}
          <span className="text-gray-200">
            React, Tailwind CSS, and JavaScript.
          </span>
        </p>
      </div>

      {/* <div className="mt-10">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex gap-4">
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
              26 years old.
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
      </div> */}

      {/* <AboutCounter></AboutCounter> */}

      {/* <div className="mt-15 gap-6 flex">
        <a
          href="/cv.pdf"
          download
          className="px-6 py-2 border border-[#6ef08e] text-[#6ef08e] font-medium rounded-lg hover:bg-[#7cf03d]/10 transition-all flex items-center justify-center"
        >
          Download CV
        </a>

        <div>
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="
              text-[#6ef08e]
              border-2 
              border-[#6ef08e]
              rounded-full 
              p-3 
              transition-all 
              duration-300 
              ease-in-out
              hover:bg-green-400 
              hover:text-[#1a1a2e] 
              hover:shadow-lg 
              hover:shadow-green-400/50
            "
                >
                  <span className="text-2xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      
      <div className="mt-16">
        <h2 className="md:text-4xl text-3xl font-semibold mb-8">What I’m Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#313945] cursor-pointer duration-300 p-6 rounded-2xl flex flex-col gap-3 shadow-lg hover:shadow-[#7cf03d]/30 hover:-translate-y-1 transition-all"
            >
              <div className="text-[#7cf03d] text-3xl">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
