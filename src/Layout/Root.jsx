import React from "react";
import Slidebar from "../Components/Slidebar/Slidebar";
import { Outlet } from "react-router";
import MainContent from "../Components/Main/MainContent";

const Root = () => {
  return (
    <div className="container mx-auto max-w-[1300px] py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
        <div className="">
          <Slidebar className="lg:col-span-1 bg-[#0f172a] p-6 rounded-2xl"></Slidebar>
        </div>

        <div className="backdrop-brightness-105 text-white rounded-2xl shadow-xl lg:col-span-3">
          <MainContent className=" bg-[#0f172a] p-6"></MainContent>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
