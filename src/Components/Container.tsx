import React from "react";

import TextReveal from "./TextReveal";
const Container: React.FC = () => {
  return (
    <div className="py-8 bg-black ">
      <div className="background1">
        <div className="">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1224.000000pt" height="204.000000pt" viewBox="0 0 1224.000000 204.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,0.000000) scale(0.100000,0.100000)"
fill="#000000" stroke="none">
<path d="M3092 1938 c-14 -14 -990 -18 -1912 -9 -449 5 -1078 -5 -1140 -18
l-35 -7 -3 -952 -2 -952 6120 0 6120 0 0 390 0 390 -3798 0 c-3348 0 -3804 2
-3849 15 -57 17 -54 14 -562 500 -179 170 -383 366 -454 434 -179 170 -202
179 -449 181 -5 0 -8 9 -8 20 0 23 -10 26 -28 8z"/>
</g>
</svg>


        </div>
        <div className="w-[100vw]  h-[110vh] "></div>
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
