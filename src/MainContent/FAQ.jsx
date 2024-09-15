import React from "react";
import Accordian from "../components/Accordian";
import { AccordianItem } from "../components/Accordian";
import faqs from "../Constants/FaqData";
function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-4xl">FAQ</h1>
      <Accordian className="pt-10 px-4 max-w-6xl cursor-none">
        {faqs.map((item, index) => (
          <AccordianItem value={index} trigger={item.question}>
            {item.answer}
          </AccordianItem>
        ))}
      </Accordian>
    </div>
  );
}

export default FAQ;
