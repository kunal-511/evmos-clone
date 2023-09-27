import React, { useState, useEffect } from "react";
import logo from "../assets/evmos-logo.svg";
import BlinkingText from "./BlinkingText";

const Loader: React.FC = () => {
  const [count, setCount] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 50);
    if (count >= 100) {
      setShowAnimation(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <>
      <div className="flex   h-[100vh] justify-center items-center bg-black text-custom2">
        <BlinkingText additionalClassName="top-20 right-80" />
        <div className="flex space-x-20 realtive ">
          <div className="uppercase text-9xl font-bold evmos blink-text">
            <p>
              <span>l</span>
              <span>a</span>
              <span>u</span>
              <span>n</span>
              <span>c</span>
              <span>h</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </p>
          </div>
          <img src={logo} className="w-[8rem]" alt="" />

          <div className=" text-9xl font-bold">{count}</div>
        </div>
        <BlinkingText additionalClassName="bottom-36 left-16" />
        <BlinkingText additionalClassName="bottom-20" />
      </div>
      {showAnimation && (
        <>
          <div className="svg-container bottom-half">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#000000"
                fillOpacity="1"
                d="M0,0L34.3,37.3C68.6,75,137,149,206,192C274.3,235,343,245,411,218.7C480,192,549,128,617,128C685.7,128,754,192,823,197.3C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,149.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="svg-container top-half">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#000000"
                fill-opacity="1"
                d="M0,0L34.3,37.3C68.6,75,137,149,206,192C274.3,235,343,245,411,218.7C480,192,549,128,617,128C685.7,128,754,192,823,197.3C891.4,203,960,149,1029,128C1097.1,107,1166,117,1234,149.3C1302.9,181,1371,235,1406,261.3L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </svg>
          </div>
        </>
      )}
    </>
  );
};

export default Loader;
