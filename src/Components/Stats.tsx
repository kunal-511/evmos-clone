import React from "react";
import { BsFillSquareFill } from "react-icons/bs";
const Stats: React.FC = () => {
  return (
    <>
      <div className="mainBg bg-center ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00000"
            fill-opacity="1"
            d="M0,0L34.3,37.3C68.6,75,137,149,206,192C274.3,235,343,245,411,218.7C480,192,549,128,617,128C685.7,128,754,192,823,197.3C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,149.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
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
