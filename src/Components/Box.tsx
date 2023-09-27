import React from "react";
import TextReveal from "./TextReveal";

const Box: React.FC = () => {
  return (
    <div className="bg-black text-white pt-10 px-8 h-[100vh]">
      <div className="evmos uppercase text-8xl">
        <p>Build</p>
        <p>without limits</p>
      </div>
      <div>
        <p className="text-3xl font-medium w-[34rem] py-8 ml-auto text-custom2 reveal-type">
          <TextReveal customText="Developers use Evmos as the Ethereum Canary Chain to deploy applications of the future. Get all the functionalities of Ethereum with the power of IBC and Interchain composability." />
        </p>
      </div>
    </div>
  );
};

export default Box;
