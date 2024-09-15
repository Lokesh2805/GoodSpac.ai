import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import WhiteLogo from "../assets/WhiteLogo.svg";

function Footer() {
  const sections = [
    {
      title: "Hire by Location",
      items: [
        "Hiring in Delhi",
        "Hiring in Mumbai",
        "Hiring in Gurugram",
        "Hiring in Noida",
        "Hiring in Pune",
        "Hiring in Kolkata",
        "Hiring in Chandigarh",
        "Hiring in Hyderabad",
      ],
    },
    {
      title: "Hire by Designation",
      items: [
        "Hiring Sales Executive",
        "Hiring Marketing Executive",
        "Hiring Java Developer",
        "Hiring Business Analyst",
        "Hiring Digital Marketing Executive",
        "Hiring Android Developers",
        "Hiring Javascript Developer",
      ],
    },
    {
      title: "Company",
      items: [
        "About Us",
        "Our Team",
        "Carrers",
        "Contact Us",
        "Blogs",
        "Press Room",
        "Find Blood",
        "Donors",
      ],
    },
    {
      title: "Legal",
      items: [
        "Terms of Use",
        "Privacy Policy",
        "Cookie Policy",
        "Refund Policy",
      ],
    },
  ];

  const socialMedia = [
    { name: "info@goodspace.ai", icon: TbMail, url: "info@goodspace.ai" },
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com" },
  ];
  return (
    <footer className="bg-custom-gradient text-white h-96 w-full  bottom-0 flex items-center justify-center z-50 px-4">
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center text-center gap-4 px-10 ">
        <div className="w-full  flex flex-col justify-center items-center md:gap-2">
          <img
            src={WhiteLogo}
            alt="altLogo"
            className="w-40 h-40 md:w-auto md:h-auto "
          />
          <p className="text-sm mt-[-40px] md:mt-0">
            World’s #1st AI Recruitment Platform
          </p>
        </div>
        <div className="flex flex-col gap-4 self-start pl-20 md:pl-36">
          <p className="text-left font-bold text-xl">Let's Connect</p>
          {socialMedia.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <a href={item.url}>
                {" "}
                <item.icon className="text-3xl" />
              </a>
              {index == 0 && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="text-xs">
          ©2024 GoodSpace AI <sup>®</sup>. All rights reserved worldwide.
        </div>
      </div>
      <div className="hidden lg:w-3/5 lg:flex lg:flex-row lg:visible lg:justify-between lg:mr-20">
        {sections.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-left font-bold text-lg">{item.title}</p>
            {item.items.map((subItem, subIndex) => (
              <a
                href="#"
                key={subIndex}
                className="text-left font-normal text-sm hover:underline hover:font-semibold"
              >
                {subItem}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
