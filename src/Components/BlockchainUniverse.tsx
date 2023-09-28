import React from "react";
import { BsFillSquareFill } from "react-icons/bs";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";


gsap.registerPlugin(ScrollTrigger);

const BlockchainUniverse: React.FC = () => {
  return (
    <div className="px-6  text-white">
      <div className="text-8xl  evmos  ">
        <p>Your</p>
        <p>Portal To</p>
        <p>New Blockchain</p>
        <p>Universe</p>
      </div>
      <div className=" mt-2 py-6">
        <p className="text-5xl font-semibold">
          Think cross-chain, not multichain
        </p>
      </div>

      <div className="mt-6 overflow-auto scroll containe relative ">
        <div className="flex mt-8 space-x-12 ">
          <section className="flex flex-col    justify-between">
            <div className="flex flex-col ">
            <div className="flex flex-col border-y-[1px] border-white border-x-black rounded-3xl p-5 min-w-[34rem] h-[18rem] justify-between background5 ">
             
              <p className="  flex justify-between text-xs">
                001 <BsFillSquareFill className="text-gray-300 w-1" />
              </p>
              

              <p className="flex justify-between">
                {" "}
                <BsFillSquareFill className="text-gray-300 w-1" />{" "}
                <BsFillSquareFill className="text-gray-300 w-1" />
              </p>
            </div>
            <div className="flex justify-between  mt-2">
              <p className="font-semibold ">
                Lorem, ipsum dolor 
              </p>
              <p className="text-[0.9rem] w-[16rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
                debitis.
              </p>
            </div>
            </div>
          </section>

          <section className="flex flex-col    justify-between">
            <div className="flex flex-col ">
            <div className="flex flex-col border-y-[1px] border-white border-x-black rounded-3xl p-5 min-w-[34rem] h-[18rem] justify-between  background5">
             
              <p className="  flex justify-between text-xs">
                002 <BsFillSquareFill className="text-gray-300 w-1" />
              </p>

              <p className="flex justify-between">
                {" "}
                <BsFillSquareFill className="text-gray-300 w-1" />{" "}
                <BsFillSquareFill className="text-gray-300 w-1" />
              </p>
            </div>
            <div className="flex justify-between  mt-2">
              <p className="font-semibold ">
                Lorem, ipsum dolor 
              </p>
              <p className="text-[0.9rem] w-[16rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
                debitis.
              </p>
            </div>
            </div>
          </section>
          <section className="flex flex-col    justify-between">
            <div className="flex flex-col ">
            <div className="flex flex-col border-y-[1px] border-white border-x-black rounded-3xl p-5 min-w-[34rem] h-[18rem] justify-between background5 ">
             
              <p className="  flex justify-between text-xs">
                003 <BsFillSquareFill className="text-gray-300 w-1" />
              </p>

              <p className="flex justify-between ">
                {" "}
                <BsFillSquareFill className="text-gray-300 w-1" />{" "}
                <BsFillSquareFill className="text-gray-300 w-1" />
              </p>
            </div>
            <div className="flex justify-between  mt-2">
              <p className="font-semibold ">
                Lorem, ipsum dolor
              </p>
              <p className="text-[0.9rem] w-[16rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
                debitis.
              </p>
            </div>
            </div>
          </section>
          <section className="flex flex-col    justify-between">
            <div className="flex flex-col ">
            <div className="flex flex-col border-y-[1px] border-white border-x-black rounded-3xl p-5 min-w-[34rem] h-[18rem] justify-between  background5">
             
              <p className="  flex justify-between text-xs">
                004 <BsFillSquareFill className="text-gray-300 w-1" />
              </p>

              <p className="flex justify-between">
                {" "}
                <BsFillSquareFill className="text-gray-300 w-1" />{" "}
                <BsFillSquareFill className="text-gray-300 w-1" />
              </p>
            </div>
            <div className="flex justify-between  mt-2">
              <p className="font-semibold">
                Lorem, ipsum dolor
              </p>
              <p className="text-[0.9rem] w-[16rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
                debitis.
              </p>
            </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlockchainUniverse;
