import React from "react";
import AppStore from '../assets/AppStore.svg';
import GooglePlay from '../assets/GooglePlay.svg';
import Barcode from '../assets/Barcode.png'
import experience from '../assets/experience.png'
function Experience() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full md:w-11/12 h-full bg-[#f1f4f7] flex flex-col  md:flex-row justify-between items-center px-8 pt-20 pb-12 rounded-xl ">
        <div className="md:w-2/3 space-y-6">
          <h1 className=" text-2xl font-bold md:text-6xl">
            Experience the <span className="text-[#237bca]">GoodSpace</span> app on mobile
          </h1>
          <div className="bg-white md:w-1/2 flex flex-col md:flex-row justify-between items-center rounded-xl">
            <div className="flex md:flex-col justify-center items-center space-y-4 p-16 w-full  md:w-1/2">
              <img src={GooglePlay} alt="googleplay"  className="transform transition-transform duration-300 hover:scale-150 md:scale-125"/>
              <img src={AppStore} alt="appstore" className="transform transition-transform duration-300 hover:scale-150 md:scale-125"/>
            </div>
            <div className="h-32 md:h-40 border-l-2 border-gray-400 hidden md:block "></div>
            <div className="flex justify-center items-center w-1/2 ">
              <img src={Barcode} alt="barcode" className="w-40 h-40 md:scale-125"/>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/3"><img src={experience} alt="experience" className="scale-125"/> </div>
      </div>
    </div>
  );
}

export default Experience;
