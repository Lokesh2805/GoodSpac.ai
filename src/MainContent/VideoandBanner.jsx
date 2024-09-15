import React, {useState, useEffect} from "react";
import video from "../assets/GoodSpace.mp4";
import icons from "../Constants/icons";
function VideoandBanner() {
    const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Trigger zoom-in effect after component mounts
    setTimeout(() => setIsZoomed(true), 100);
  }, []);
  return (
    <div className={`flex flex-col justify-center items-center relative transition-all duration-1000 ease-in-out transform ${
        isZoomed ? "scale-100" : "scale-50"
      }`}>
      {/* Video Element */}
      <video
        src={video}
        className="rounded-3xl z-10 border-4 border-transparent p-3 md:p-0 md:w-2/3 md:h-2/3"
        controls="controls"
        autoPlay={false}
      />

      {/* Grey Background Div */}
      <div
        style={{ boxShadow: "0 0 10px #0000001a" }}
        className="w-11/12 h-[24rem] md:h-[30rem] bg-[#f1f4f7] z-0 mt-[-270px] flex justify-between items-center"
      >
        {/* Icons at the bottom */}
        <div className="relative w-full overflow-hidden space-x-16 self-end">
          <div className="flex justify-center items-center gap-4 self-end pb-16 space-x-16 animate-loop-scroll">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`icon-${index}`}
                className="w-24 h-24 md:w-full md:h-full grayscale max-w-none"
              />
            ))}
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`icon-${index}`}
                className="w-24 h-24 md:w-full md:h-full grayscale max-w-none"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoandBanner;
