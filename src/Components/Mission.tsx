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
      </div>
    </>
  );
};

export default Mission;
