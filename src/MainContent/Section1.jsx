import React, { useState, useEffect } from "react";
import Stars from "../assets/Stars.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Section1() {
  const [number, setNumber] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Trigger zoom-in effect after component mounts
    setTimeout(() => setIsZoomed(true), 100);
  }, []);
  return (
    <div
      className={`flex flex-col p-20 justify-center items-center gap-y-10  transition-all duration-1000 ease-in-out transform ${
        isZoomed ? "scale-100" : "scale-50"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <img src={Stars} alt="AI" />
        <p className="text-[#297bca] font-normal text-sm">
          World’s #1st AI Recruiter
        </p>
      </div>
      <div className="font-bold text-3xl md:text-7xl text-center">
        <h1>
          Close your hiring
          <br />
          in less than <span className="text-[#237bca]">24 Hours</span>
        </h1>
      </div>
      <div className="text-xs text-[#4d5359] text-center font-light">
        An AI powered recruiting platform that sources, shortlists, interviews
        and evaluates potential
        <br />
        candidates specific to your hiring needs - in just a day!
      </div>
      <div className="flex flex-col md:flex-row gap-0">
        <PhoneInput
          country={number}
          placeholder="Enter your contact number "
          inputStyle={{ height: "56px", width: "23rem" }}
          className=""
          onChange={(phone) => {
            setNumber(phone);
          }}
        />
        <button className="flex justify-center items-center bg-[#297bca]  text-white font-bold  border border-[#297bca] w-92 my-4 md:my-0 h-14 md:w-48 md:ml-[-30px] rounded text-sm">
          Start Hiring
        </button>
      </div>
    </div>
  );
}

export default Section1;
