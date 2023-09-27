import React from "react";
import footerLogo from "../assets/mask-group.png";
import { BsArrowUpRight } from "react-icons/bs";
const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-custom3 pt-16 pb-10  px-8">
        <div className="flex justify-center items-center  bg-custom3 p-3 mb-28  border-y-[1px] border-y-black border-x-[1px] border-x-custom3 rounded-[1.5rem]  ">
          <button className="px-16 py-6 bg-custom4 w-full font-bold text-xl hover:text-2xl hover:px-20 hover:py-8 ">
            Get Started
          </button>
        </div>
        <div className="flex mt-12 space-x-20">
          <div>
            <ul className="text-gray-400  text-sm space-y-1 ">
              <li className="text-xl font-medium text-black mb-2 cursor-text">
                Company
              </li>
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">Technology</li>
              <li className="hover:text-black cursor-pointer">Community</li>
              <li className="hover:text-black cursor-pointer">Mission</li>
              <li className="flex items-center hover:text-black cursor-pointer ">
                Careers <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400 text-sm space-y-1  ">
              <li className="text-xl font-medium text-black mb-2 cursor-text">
                Connect
              </li>
              <li className="flex items-center hover:text-black cursor-pointer ">
                GitHub <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
              </li>
              <li className="flex items-center hover:text-black cursor-pointer ">
                Discord <BsArrowUpRight className="w-[0.65rem] ml-1 " />
              </li>
              <li className="flex items-center hover:text-black cursor-pointer ">
                Twitter <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400  text-sm space-y-1 ">
              <li className="text-xl font-medium text-black mb-2 cursor-text">
                Resources
              </li>
              <li className="flex items-center hover:text-black cursor-pointer ">
                Evmos Docs <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
              </li>
              <li className="flex items-center  hover:text-black cursor-pointer">
                Academy <BsArrowUpRight className="w-[0.65rem] ml-1 " />
              </li>
              <li className="flex items-center hover:text-black cursor-pointer ">
                Press Kit <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-10 justify-between items-center">
          <div className="">
            <ul className="flex  space-x-32 uppercase text-xs text-gray-500">
              <li className="hover:text-black cursor-pointer">
                terms of service
              </li>
              <li className="hover:text-black cursor-pointer">
                privacy policy
              </li>
              <li className="hover:text-black cursor-pointer">cookie policy</li>
              <li className="hover:text-black cursor-text">© 2023 evmos</li>
            </ul>
          </div>
          <img src={footerLogo} className="w-[5rem]" alt="" />
        </div>
      </footer>
      <div className="mt-[-1.8rem] px-0   bg-custom3 background4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFF4E1"
            fill-opacity="1"
            d="M0,0L34.3,37.3C68.6,75,137,149,206,192C274.3,235,343,245,411,218.7C480,192,549,128,617,128C685.7,128,754,192,823,197.3C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,149.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Footer;
