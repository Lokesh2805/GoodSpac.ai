import React, { useState } from "react";
import TabsComponent from "../components/TabComponent";
import PhoneInput from "react-phone-input-2";
function AIfeatures() {
  const [number, setNumber] = useState("in");
  const benefits = [
    {
      title: "30%",
      description: (
        <>
          Increase in candidate
          <br /> applications per job
        </>
      ),
    },
    {
      title: "5 hrs+",
      description: (
        <>
          time saved per day
          <br /> per recruiter
        </>
      ),
    },
    {
      title: "10X",
      description: (
        <>
          Improved candidate
          <br /> quality per job
        </>
      ),
    },
    {
      title: "1/10th",
      description: (
        <>
          the cost per job
          <br /> per recruiter
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <p className="text-xl md:text-3xl font-semibold text-center pt-20">
        Why companies across India are choosing <br />{" "}
        <span className=" font-bold text-[#297bca]">GoodSpace</span>
      </p>

      <div>
        <TabsComponent />
      </div>
      <div className="w-full md:w-11/12 bg-[#f1f4f7] h-full flex flex-col md:flex-row md:justify-between p-10 rounded-xl">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="font-bold text-3xl text-center md:text-start md:text-6xl">
            Find your next hire today.
          </h1>
          <div className="flex flex-col md:flex-row gap-0">
            <PhoneInput
              country={number}
              placeholder="Enter your contact number "
              inputStyle={{ height: "56px", width: "20rem" }}
              className=""
              onChange={(phone) => {
                setNumber(phone);
              }}
            />
            <button className="flex justify-center items-center bg-[#297bca]  text-white font-bold md:ml-[-290px]  border border-[#297bca] w-80 my-4 md:my-0 h-14 md:w-40 rounded text-sm">
              Start Hiring
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 pt-6 md:pt-0">
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className=" text-[#297bca] text-center flex flex-col justify-center items-center gap-3 transform transition-transform duration-300 hover:scale-105 "
              >
                <p className=" text-4xl md:text-5xl font-bold">{benefit.title}</p>
                <p className="text-gray-400 text-sm text-center ">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIfeatures;
