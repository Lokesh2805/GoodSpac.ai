import React from "react";
import interview from "../../assets/interview.png";
function Slide3() {
  return (
    <div className="flex md:flex-row flex-col justify-between md:gap-48 px-10 md:px-32 pt-10 bg-white">
      <div className="flex-col w-full md:w-2/3 space-y-6 pt-10">
        <h1 className="text-left font-semibold text-2xl md:text-5xl text-[#297bca]">
          And interviewed candidates the same day
        </h1>
        <hr className="h-px bg-gray-200 border-0"></hr>
        <p className="text-left text-gray-400 text-xs md:text-xl">
          Shortlisted candidates are great, but interviewed candidates are
          better. These are your perfect match!
        </p>
      </div>
      <div className="w-full md:w-1/3 mt-10 px-20 md:px-0 md:mt-0 flex justify-center items-center">
        <img src={interview} alt="aifinder" className="w-auto h-full" />
      </div>
    </div>
  );
}

export default Slide3;
