import React from "react";

import TextReveal from "./TextReveal";
const Container: React.FC = () => {
  return (
    <div className="py-8 bg-black ">
      <div className="background1">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00000"
              fill-opacity="1"
              d="M0,0L34.3,37.3C68.6,75,137,149,206,192C274.3,235,343,245,411,218.7C480,192,549,128,617,128C685.7,128,754,192,823,197.3C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,149.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="w-[100vw]  h-[80vh] "></div>
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
      <div className="px-6 py-16 text-white">
        <div className="w-[65%] text-4xl text-custom2 ">
          <p className="reveal-type">
            <TextReveal customText="EVM compatibility. Cross-chain connectivity. Enter the world of Ethereum-based applications and assets enhanced by the interoperable networks of the Cosmos ecosystem." />
          </p>
        </div>
        <div className="flex justify-end space-x-20 my-20 mr-20">
          <div className="w-[20rem]">
            <p className="uppercase font-bold mb-2">[ evm ]</p>
            <p className="text-sm  ">
              The builder's choice with family Ethereum - based tools that make
              everything you do developer friendly.
            </p>
          </div>
          <div className="w-[20rem]">
            <p className="uppercase font-bold mb-2">[ consmos ]</p>
            <p className="text-sm  ">
              The multi - chain IBC-coordinated architecture that's infinitely
              scalable with no limits to your application's governance.
            </p>
          </div>
        </div>
        <div className="border-y-[1px] border-x-[1px] border-x-black border-white p-8 rounded-[2rem] background3">
          <div className="w-[100vw] h-[100vh]"  />
        </div>
      </div>
    </div>
  );
};

export default Container;
