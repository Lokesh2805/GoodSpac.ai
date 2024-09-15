import React from "react";
import yourhires from "../../assets/yourhires.png";
function Slide4() {
  return (
    <div className="bg-custom-gradient flex md:flex-row flex-col-reverse justify-between md:gap-48 px-10 md:px-32 pt-10">
      <div className="w-full md:w-1/3 mt-10 px-20 md:px-0 md:mt-0 flex justify-center items-center">
        <img src={yourhires} alt="aifinder" className="w-auto h-full" />
      </div>
      <div className="flex-col w-full md:w-2/3 space-y-6 pt-10">
        <h1 className="text-left font-semibold text-2xl md:text-5xl text-white">
          You are all set to find your next hire
        </h1>
        <hr className="h-px bg-white border-0"></hr>
        <p className="text-left text-white text-xs md:text-xl">
          You get top candidates faster than ever. You hire them faster than
          ever. No delayed hiring for you, ever again!
        </p>
      </div>
    </div>
  );
}

export default Slide4;
