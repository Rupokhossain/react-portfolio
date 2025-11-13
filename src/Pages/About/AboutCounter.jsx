import React, { useEffect, useState } from "react";

const Counter = ({ target, label, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        start = target;
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="">
      <h3 className="text-3xl font-medium text-[#6ef08e]">
        {count}
        <span className="text-[#6ef08e]">+</span>
      </h3>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
};

const AboutCounters = () => {
  return (
    <div className="grid grid-cols-3 gap-6 text-center mt-12">
      <Counter target={2} label="Years Learning" />
      <Counter target={15} label="Projects Completed" />
      <Counter target={500} label="Hours of Practice" />
    </div>
  );
};

export default AboutCounters;
