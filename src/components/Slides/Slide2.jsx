import React from "react";
import jobseeker from "../../assets/jobseeker.png";
function Slide2() {
  return (
    <div className="bg-custom-gradient flex md:flex-row flex-col-reverse justify-between md:gap-48 px-10 md:px-32 pt-10">
      <div className="w-full md:w-1/3 mt-10 px-20 md:px-0 md:mt-0 flex justify-center items-center">
        <img src={jobseeker} alt="aifinder" className="w-auto h-full" />
      </div>
      <div className="flex-col w-full md:w-2/3 space-y-6 pt-10">
        <h1 className="text-left font-semibold text-2xl md:text-5xl text-white">
          Get shortlisted candidates within a day
        </h1>
        <hr className="h-px bg-white border-0"></hr>
        <p className="text-left text-white text-xs md:text-xl">
          You sit back and relax while we source and shortlist high quality
          potential candidates for you!
        </p>
      </div>
    </div>
  );
}

export default Slide2;
