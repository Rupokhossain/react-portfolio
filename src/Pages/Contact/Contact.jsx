import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

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
    <div className="text-white p-8 md:p-16">
      {/* --- Main Heading --- */}
      <div className="">
        <h2 className="md:text-4xl text-3xl font-medium">Contact Me</h2>
        <div className="border-b-[5px] inline-block w-14 border-[#6ef08e] rounded mt-2"></div>
      </div>

      <div className="max-w-7xl mx-auto md:mt-12 mt-8">
        {/* --- Top Section: Contact Info --- */}
        <div className="text-center md:text-left mb-16">
          <h2 className="md:text-3xl text-xl font-semibold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
            I'm always excited to connect with new people and explore
            interesting opportunities. Feel free to reach out through the form
            or my contact details below.
          </p>
          <div className="flex flex-col  sm:flex-row sm:justify-center md:justify-between gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 cursor-pointer rounded-lg flex justify-center items-center text-xl text-[#6ef08e] bg-[#2b2b2c] transition-all  duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-start  font-semibold cursor-pointer">
                    {item.label}
                  </p>
                  <p className="text-gray-300 font-medium  cursor-pointer group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- Bottom Section: Contact Form --- */}
        <div className="bg-[#313945] p-8 rounded-lg shadow-2xl max-w-3xl mx-auto">
          <form action="#" method="POST" className="autofill-override">
            <div className="flex flex-col gap-8 mb-8">
              {" "}
              {/* Increased gap for better spacing */}
              {/* Full Name Input - New Underline Style */}
              <input
                type="text"
                name="full-name"
                placeholder="Full Name"
                className="w-full bg-transparent text-white py-3 border-b border-gray-600 focus:outline-none focus:border-[#6ef08e] focus:border-b-2 placeholder:text-gray-300 transition-all duration-300"
                required
              />
              {/* Email Address Input - New Underline Style */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-transparent text-white py-3 border-b border-gray-600 focus:outline-none focus:border-[#6ef08e] focus:border-b-2 placeholder:text-gray-300 transition-all duration-300"
                required
              />
            </div>
            {/* Message Textarea - New Underline Style */}
            <div className="mb-8">
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full bg-transparent text-white py-3 border-b border-gray-600 focus:outline-none focus:border-[#6ef08e] focus:border-b-2 placeholder:text-gray-300 transition-all duration-300"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 border border-[#6ef08e] text-[#6ef08e] font-medium rounded-full cursor-pointer hover:bg-[#6ef08e]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#313945] focus:ring-[#6ef08e] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
