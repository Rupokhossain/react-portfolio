import React from "react";

const SkillGroup = ({ title, items, color, isLearning }) => (
  <div className="bg-[#1e2530] p-6 rounded-2xl border border-gray-800 shadow-xl hover:border-[#6ef08e]/30 transition-all duration-300">
    <div className="flex justify-between items-center mb-6">
      <h4 className="text-white font-semibold text-lg tracking-wide">{title}</h4>
      {isLearning && (
        <span className="text-[10px] bg-[#6ef08e]/10 text-[#6ef08e] px-2 py-0.5 rounded-full border border-[#6ef08e]/20 uppercase">
          Learning
        </span>
      )}
    </div>
    
    <div className="space-y-6">
      {items.map((skill, index) => (
        <div key={index} className="group">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
              {skill.name}
            </span>
            <span className="text-[#6ef08e] text-xs font-mono">{skill.level}%</span>
          </div>
          {/* Graphical Progress Bar */}
          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_#6ef08e60]" 
              style={{ 
                width: `${skill.level}%`, 
                backgroundColor: color 
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillGroup;
