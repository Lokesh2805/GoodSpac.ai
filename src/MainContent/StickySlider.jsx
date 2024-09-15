import React from "react";
import Slide1 from "../components/Slides/Slide1";
import Slide2 from "../components/Slides/Slide2";
import Slide3 from "../components/Slides/Slide3";
import Slide4 from "../components/Slides/Slide4";

function StickySlider() {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-20">
      <div className="sticky top-0">
        <Slide1 />
      </div>
      <div className="sticky top-0">
        <Slide2 />
      </div>
      <div className="sticky top-0">
        <Slide3 />
      </div>
      <div className="sticky top-0">
        <Slide4 />
      </div>
    </div>
  );
}

export default StickySlider;
