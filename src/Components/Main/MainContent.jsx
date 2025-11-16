
import { NavLink } from "react-router";

const MainContent = () => {
  return (
    <div className="">
      {/* Desktop */}
      <div className=" hidden md:block
       absolute xl:top-16 lg:top-16 md:top-[465px] md:right-5 xl:right-0
        border border-gray-600 
        bg-[#232429] 
        px-6 py-5 
        rounded-bl-2xl rounded-tr-2xl
        z-50
      ">
        <div className="text-base font-medium text-gray-300 flex space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#6ef08e] duration-200 ${
                isActive ? "text-[#6ef08e]" : "text-gray-300"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `hover:text-[#6ef08e] duration-200 ${
                isActive ? "text-[#6ef08e]" : "text-gray-300"
              }`
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `hover:text-[#6ef08e] duration-200 ${
                isActive ? "text-[#6ef08e]" : "text-gray-300"
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[#6ef08e] duration-200 ${
                isActive ? "text-[#6ef08e]" : "text-gray-300"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile & Tablet */}
      <div className="md:hidden fixed bottom-0 w-full flex justify-center z-50">
        <div className="border border-gray-600 bg-[#232429] px-4 py-4 rounded-bl-2xl rounded-tr-2xl">
          <div className="text-sm font-medium text-gray-300 flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#6ef08e] duration-200 ${
                  isActive ? "text-[#6ef08e]" : "text-gray-300"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `hover:text-[#6ef08e] duration-200 ${
                  isActive ? "text-[#6ef08e]" : "text-gray-300"
                }`
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `hover:text-[#6ef08e] duration-200 ${
                  isActive ? "text-[#6ef08e]" : "text-gray-300"
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#6ef08e] duration-200 ${
                  isActive ? "text-[#6ef08e]" : "text-gray-300"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      
    </div>
  );
};



export default MainContent;
