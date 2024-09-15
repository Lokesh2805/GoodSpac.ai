import React, { useState, useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import AiFinder from "../assets/AiFinder.png";
import Aishortlister from "../assets/Aishortlister.png";
import AiInterviwer from "../assets/AiInterviwer.png";
import Aievaluator from "../assets/Aievaluator.png";

function TabsComponent() {
  const [activeTab, setActiveTab] = useState("AI Shortlister");
  const tabs = [
    "AI Finder",
    "AI Shortlister",
    "AI Interviewer",
    "AI Evaluator",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "AI Finder":
        return (
          <div className="flex md:flex-row flex-col-reverse justify-between md:gap-48">
            <div className="flex-col w-full md:w-1/2 space-y-6">
              <h1 className="text-left font-bold text-xl md:text-5xl bg-gradient-to-r from-[#297bca] via-[#59a6ed] to-[#297bca] bg-clip-text text-transparent">
                AI Finder
              </h1>
              <hr className="h-px bg-gray-200 border-0"></hr>
              <p className="text-left text-gray-400 text-xs md:text-sm">
                AI Finder employs state-of-the-art algorithms to search our
                database of over 10 million+ active job seekers, sourcing
                candidates that are actively looking for the role you are hiring
                for.
              </p>
              <button className="flex gap-2 justify-center items-center bg-[#297bca] text-white font-bold border border-[#297bca] w-80 md:my-0 h-14 md:w-48 rounded text-sm">
                Start Hiring <BsArrowRightCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <img src={AiFinder} alt="aifinder" />
            </div>
          </div>
        );
      case "AI Shortlister":
        return (
          <div className="flex md:flex-row flex-col-reverse justify-between md:gap-48">
            <div className="flex-col w-full md:w-1/2 space-y-6">
              <h1 className="text-left font-bold text-xl md:text-5xl bg-gradient-to-r from-[#297bca] via-[#59a6ed] to-[#297bca] bg-clip-text text-transparent">
                AI Shortlister
              </h1>
              <hr className="h-px bg-gray-200 border-0"></hr>
              <p className="text-left text-gray-400 text-xs md:text-sm">
                AI Shortlister leverages advanced analytics to accurately
                evaluate candidates against 50+ parameters, ensuring only the
                most qualified applicants are prioritized for further
                consideration.
              </p>
              <button className="flex gap-2 justify-center items-center bg-[#297bca] text-white font-bold border border-[#297bca] w-96 md:my-0 h-14 md:w-48 rounded text-sm">
                Start Hiring <BsArrowRightCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <img src={Aishortlister} alt="aifinder" />
            </div>
          </div>
        );
      case "AI Interviewer":
        return (
          <div className="flex md:flex-row flex-col-reverse justify-between md:gap-48">
            <div className="flex-col w-full md:w-1/2 space-y-6">
              <h1 className="text-left font-bold text-xl md:text-5xl bg-gradient-to-r from-[#297bca] via-[#59a6ed] to-[#297bca] bg-clip-text text-transparent">
                AI Interviewer
              </h1>
              <hr className="h-px bg-gray-200 border-0"></hr>
              <p className="text-left text-gray-400 text-xs md:text-sm">
                AI Interviewer conducts live video interviews with shortlisted
                candidates, delving into their suitability, motivation, and
                enthusiasm for the position; identifying candidates who are not
                only qualified but genuinely interested in the role.
              </p>
              <button className="flex gap-2 justify-center items-center bg-[#297bca] text-white font-bold border border-[#297bca] w-96 md:my-0 h-14 md:w-48 rounded text-sm">
                Start Hiring <BsArrowRightCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <img src={AiInterviwer} alt="aifinder" />
            </div>
          </div>
        );
      case "AI Evaluator":
        return (
          <div className="flex md:flex-row flex-col-reverse justify-between md:gap-48">
            <div className="flex-col w-full md:w-1/2 space-y-6">
              <h1 className="text-left font-bold text-xl md:text-5xl bg-gradient-to-r from-[#297bca] via-[#59a6ed] to-[#297bca] bg-clip-text text-transparent">
                AI Evaluator
              </h1>
              <hr className="h-px bg-gray-200 border-0"></hr>
              <p className="text-left text-gray-400 text-xs md:text-sm">
                AI Evaluator integrates all feedback collected so far to
                evaluate them based on a thorough understanding of their
                capabilities and fit; streamlining hiring end-to-end and
                ensuring only the highest quality hires.
              </p>
              <button className="flex gap-2 justify-center items-center bg-[#297bca] text-white font-bold border border-[#297bca] w-96 md:my-0 h-14 md:w-48 rounded text-sm">
                Start Hiring <BsArrowRightCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <img src={Aievaluator} alt="aifinder" />
            </div>
          </div>
        );
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <div className="flex flex-col items-center">
      {/* Tab navigation */}
      <div className="flex justify-center space-x-6 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative text-sm md:text-lg font-semibold px-4 py-2 ${
              activeTab === tab ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            <span
              className={`absolute bottom-0 left-0 h-[4px] w-full transition-all duration-300 transform ${
                activeTab === tab
                  ? "bg-blue-600 scale-x-100"
                  : "bg-transparent scale-x-0"
              } hover:bg-blue-600 hover:scale-x-100`}
            ></span>
          </button>
        ))}
      </div>

      {/* Content for each tab */}
      <div className="w-3/4 py-8 mt-4 text-center">{renderContent()}</div>
    </div>
  );
}

export default TabsComponent;
