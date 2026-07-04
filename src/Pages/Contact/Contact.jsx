import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"; 
import { FiPhone, FiMail, FiSend } from "react-icons/fi";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "01636755280",
      link: "tel:+8801636755280",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "rh.siam999@gmail.com",
      link: "mailto:rh.siam999@gmail.com",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "01636755280",
      link: "https://wa.me/8801636755280",
    },
  ];

  return (
    <div
      id="contact"
      className="text-white p-8  scroll-smooth bg-[#21262F] md:py-24 lg:py-16"
    >
      {/* --- Main Heading --- */}
      <div data-aos="fade-right">
        <h2 className="md:text-4xl text-3xl font-bold tracking-widest">
          Contact <span className="text-[#6ef08e]">Me</span>
        </h2>
        <div className="h-1.5 w-16 bg-[#6ef08e] mt-2 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto md:mt-12 mt-8">
        {/* --- Top Section: Contact Info --- */}
        <div data-aos="fade-up" className="text-center md:text-left mb-16">
          <h2 className="md:text-3xl text-xl font-semibold mb-4 text-gray-200">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I'm always excited to connect with new people and explore
            interesting opportunities. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 bg-[#21262f] rounded-2xl border border-gray-800 hover:border-[#6ef08e]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex justify-center items-center text-xl text-[#6ef08e] bg-[#1e2530] shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-gray-200 font-medium group-hover:text-[#6ef08e] transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- Bottom Section: Contact Form --- */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-[#1E2530] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl max-w-4xl mx-auto"
        >
          <form
            action="https://formspree.io/f/your-id"
            method="POST"
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full bg-transparent text-white py-3 border-b border-gray-700 focus:outline-none focus:border-[#6ef08e] placeholder:text-gray-500 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-transparent text-white py-3 border-b border-gray-700 focus:outline-none focus:border-[#6ef08e] placeholder:text-gray-500 transition-all"
                required
              />
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent text-white py-3 border-b border-gray-700 focus:outline-none focus:border-[#6ef08e] placeholder:text-gray-500 transition-all resize-none"
              required
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="sm:px-10 px-6 py-4 
                        bg-[#6ef08e] 
                        text-[#1e2530] 
                        font-bold uppercase tracking-widest text-sm
                        rounded-full 
                        hover:bg-white 
                        hover:shadow-[0_0_25px_rgba(110,240,142,0.4)] 
                        transition-all duration-300 
                        inline-flex items-center justify-center gap-3 
                        whitespace-nowrap 
                        group cursor-pointer" 
              >
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>

        {/* --- Requirement #4: Social Links (Optional but good here) --- */}
        <div className="mt-16 mb-6 sm:mb-0 flex justify-center gap-6">
          <a
            href="https://github.com/Rupokhossain"
            target="_blank"
            className="text-2xl text-gray-400 hover:text-[#6ef08e] transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/siam-ahmed-dev/"
            target="_blank"
            className="text-2xl text-gray-400 hover:text-[#6ef08e] transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/siamahmed.only"
            target="_blank"
            className="text-2xl text-gray-400 hover:text-[#6ef08e] transition-all"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
