import React from "react";

const SkillGroup = ({ title, items }) => {
  return (
    <div>
      <div className="bg-[#313945] p-5 rounded-xl shadow-md">
        <h4 className="text-[#6ef08e] font-semibold mb-3">{title}</h4>
        <ul className="text-gray-300 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-[#6ef08e] rounded-full"></span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillGroup;
