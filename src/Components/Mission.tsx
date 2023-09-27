import React from "react";
import img1 from "../assets/home-1.jpg";
import img2 from "../assets/home-3.jpg";

import { BiRightArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { gsap } from "gsap";

const Mission: React.FC = () => {
  const animateBorderOnHover = (element: any) => {
    const tl = gsap.timeline();

    tl.to(element, {
      duration: 0.5,
      borderColor: "black",
      ease: "power1.inOut",
    });

    tl.to(element, {
      duration: 0.5,
      borderColor: "white",
      ease: "power1.inOut",
    });

    tl.repeat(1);
  };

  return (
    <>
      <div className="bg-black text-white pt-20 pb-8 px-6">
        <div className="flex justify-between items-end">
          <div className="evmos uppercase text-8xl ">
            <p>Join</p>
            <p>the mission</p>
          </div>
          <BiDownArrowAlt className="text-[6rem] " />
        </div>
        <div className="flex space-x-5 mt-6">
          <div className="flex flex-col cursor-pointer hover:text-orange-600 ">
            <img
              src={img1}
              className="h-[12rem] w-[38rem] border-y-[1px] border-x-[1px] border-x-black rounded-3xl  border-y-white p-4 cursor-pointer"
              alt=""
              onMouseEnter={(e) => animateBorderOnHover(e.currentTarget)}
            />

            <button className="flex text-xl items-center mt-3   ">
              Community <BiRightArrowAlt className="text-2xl ml-1 mt-2" />
            </button>
            <p className="text-custom2 text-xl">Build. Get ready.</p>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-orange-600  ">
            <img
              src={img1}
              className="h-[17rem] w-[36rem] border-y-[1px] border-x-[1px] border-x-black rounded-3xl border-white p-4 cursor-pointer "
              alt=""
              onMouseEnter={(e) => animateBorderOnHover(e.currentTarget)}
            />
            <button className="flex text-xl items-center mt-3  ">
              Academy <BiRightArrowAlt className="text-2xl ml-1 mt-2" />
            </button>
            <p className="text-custom2 text-xl">Discover. Get smart.</p>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-orange-600   ">
            <img
              src={img1}
              className="h-[22rem] w-[42rem] border-y-[1px] border-x-[1px] border-x-black rounded-3xl border-white p-4 cursor-pointer "
              alt=""
              onMouseEnter={(e) => animateBorderOnHover(e.currentTarget)}
            />
            <button className="flex text-xl items-center mt-3  ">
              Grants <BiRightArrowAlt className="text-2xl ml-1 mt-2" />
            </button>
            <p className="text-custom2 text-xl">Create. Get paid.</p>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-orange-600  ">
            <img
              src={img2}
              className="h-[28rem] w-[50rem] border-y-[1px] border-x-[1px] border-x-black rounded-3xl border-y-white p-4  cursor-pointer   "
              alt=""
              onMouseEnter={(e) => animateBorderOnHover(e.currentTarget)}
            />
            <button className="flex text-xl items-center mt-3  ">
              Ecosystem <BiRightArrowAlt className="text-2xl ml-1 mt-2" />{" "}
            </button>
            <p className="text-custom2 text-xl">Explore. Get inspired.</p>
          </div>
        </div>
      </div>
      <div className="background2">
        <div className=" w-[100vw] h-[140vh] "></div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00000"
              fill-opacity="1"
              d="M0,0L34.3,37.3C68.6,75,137,149,206,192C274.3,235,343,245,411,218.7C480,192,549,128,617,128C685.7,128,754,192,823,197.3C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,149.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Mission;
