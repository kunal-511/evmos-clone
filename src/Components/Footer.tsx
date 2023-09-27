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
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1224.000000pt" height="204.000000pt" viewBox="0 0 1224.000000 204.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,0.000000) scale(0.100000,0.100000)"
fill="#FFF4E1" stroke="none">
<path d="M3092 1938 c-14 -14 -990 -18 -1912 -9 -449 5 -1078 -5 -1140 -18
l-35 -7 -3 -952 -2 -952 6120 0 6120 0 0 390 0 390 -3798 0 c-3348 0 -3804 2
-3849 15 -57 17 -54 14 -562 500 -179 170 -383 366 -454 434 -179 170 -202
179 -449 181 -5 0 -8 9 -8 20 0 23 -10 26 -28 8z"/>
</g>
</svg>

      </div>
    </>
  );
};

export default Footer;
