import React from "react";
import Slidebar from "../Components/Slidebar/Slidebar";
import { Outlet } from "react-router";
import MainContent from "../Components/Main/MainContent";

const Root = () => {
  return (
    <div className="container mx-auto max-w-[1300px] lg:py-16 md:pb-0 pb-10  relative">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-16 gap-8">
        <div>
          <Slidebar className="lg:col-span-1 bg-[#0f172a] p-6 rounded-2xl"></Slidebar>
        </div>

        <div className="backdrop-brightness-105 text-white rounded-2xl shadow-xl lg:col-span-3">

          
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
            <MainContent className=" bg-[#0f172a] p-6 "></MainContent>
    </div>
  );
};

export default Root;
