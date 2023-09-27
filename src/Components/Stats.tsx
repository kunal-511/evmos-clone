import React from "react";
import { BsFillSquareFill } from "react-icons/bs";
const Stats: React.FC = () => {
  return (
    <>
      <div className="mainBg bg-center ">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1224.000000pt" height="204.000000pt" viewBox="0 0 1224.000000 204.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,204.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3092 1938 c-14 -14 -990 -18 -1912 -9 -449 5 -1078 -5 -1140 -18
l-35 -7 -3 -952 -2 -952 6120 0 6120 0 0 390 0 390 -3798 0 c-3348 0 -3804 2
-3849 15 -57 17 -54 14 -562 500 -179 170 -383 366 -454 434 -179 170 -202
179 -449 181 -5 0 -8 9 -8 20 0 23 -10 26 -28 8z"/>
</g>
</svg>
      </div>

      <div className="bg-black flex justify-evenly text-white uppercase pb-10">
        <div className="flex flex-col border-y-[1px] border-white border-x-black rounded-3xl  p-5 w-[22rem] h-[15rem] justify-between">
          <p className="text-custom2 flex justify-between">
            monthly active users{" "}
            <BsFillSquareFill className="text-gray-300 w-1" />
          </p>
          <p className="text-center text-4xl font-bold">212k+</p>
          <p className="flex justify-between">
            {" "}
            <BsFillSquareFill className="text-gray-300 w-1" />{" "}
            <BsFillSquareFill className="text-gray-300 w-1" />
          </p>
        </div>
        <div className="flex flex-col border-y-[1px] border-white border-x-black rounded-3xl  p-5 w-[22rem] h-[15rem] justify-between">
          <p className="text-custom2 flex justify-between">
            monthly transactions{" "}
            <BsFillSquareFill className="text-gray-300 w-1" />
          </p>
          <p className="text-center text-4xl font-bold">900k+</p>
          <p className="flex justify-between">
            {" "}
            <BsFillSquareFill className="text-gray-300 w-1" />{" "}
            <BsFillSquareFill className="text-gray-300 w-1" />
          </p>
        </div>
        <div className="flex flex-col border-y-[1px] border-white border-x-black rounded-3xl  p-5 w-[22rem] h-[15rem] justify-between">
          <p className="text-custom2 flex justify-between">
            apps and services <BsFillSquareFill className="text-gray-300 w-1" />
          </p>
          <p className="text-center text-4xl font-bold">250+</p>
          <p className="flex justify-between">
            {" "}
            <BsFillSquareFill className="text-gray-300 w-1" />{" "}
            <BsFillSquareFill className="text-gray-300  w-1" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Stats;
