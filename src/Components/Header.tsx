import React, { useState, useEffect } from "react";
import logo from "../assets/evmos-logo.svg";
import { BiDownArrowAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import blackhole from "../assets/blackhole0.png";
import { BsArrowUpRight } from "react-icons/bs";
const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTechMenu, setShowTechMenu] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["deploy once-", "access all ecosystems"];
  const [showText, setShowText] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMouseEnter = () => {
    setShowTechMenu(true);
  };

  const handleMouseLeave = () => {
    setShowTechMenu(false);
  };






  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stickyThreshold = 50;
      setIsSticky(scrollPosition > stickyThreshold);
      console.log('stcky')
    };
      

    
    const interval = setInterval(() => {
      const nextIndex = (textIndex + 1) % texts.length;
      setShowText(false);

      setTimeout(() => {
        setTextIndex(nextIndex);
        setShowText(true);
      }, 300);
    }, 5000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [textIndex]);

  const HamburgerContent: React.FC = () => {
    return (
      <div
        className={`relative ${
          showMenu ? "slide-down" : "slide-up"
        } px-6 pt-3 `}
      >
        <nav className="flex justify-between items-center bg-custom2    text-black font-semibold   ">
          <ul className="flex justify-center items-center space-x-2">
            <li>
              <img src={logo} className="w-[2.5rem]" alt="" />
            </li>
            <li className="text-2xl">Evmos</li>
          </ul>
          <ul className="flex space-x-8 justify-center items-center font-semibold">
          {!isSticky && (
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex justify-center items-center remove"
            >
              Technology <BiDownArrowAlt className="pt-[4px] text-2xl" />
            </li>
          )}
            <li
              onMouseLeave={handleMouseLeave}
              className=" flex justify-center items-center"
            >
              Community <BiDownArrowAlt className="pt-[4px] text-2xl" />
            </li>
            <li
              onMouseLeave={handleMouseLeave}
              className=" flex justify-center items-center"
            >
              About <BiDownArrowAlt className="pt-[4px] text-2xl" />
            </li>

            <li className="">
              <button className="p-2 text-black bg-orange-600 rounded-lg w-[8rem]">
                Launch App
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between mt-16">
          <div>
            <div>
              <p className="font-semibold text-5xl mb-4 cursor-pointer">
                Build With Evmos
              </p>
              <p className="w-[20rem] text-custom5 font-medium ">
                Designed with developers in mind, welcome to a universe where
                IBC can be leveraged directly from the smart contract level.
              </p>
            </div>
            <div className="mt-12 flex space-x-[6rem] text-custom5 font-medium">
              <ul className="">
                <li className="flex items-center hover:text-black cursor-pointer ">
                  Careers <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
                </li>
                <li className="flex items-center hover:text-black cursor-pointer ">
                  Press <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
                </li>
              </ul>
              <ul className="">
                <li className="flex items-center hover:text-black cursor-pointer ">
                  Enquires <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
                </li>
                <li className="flex items-center hover:text-black cursor-pointer ">
                  Maifesto <BsArrowUpRight className="w-[0.65rem] ml-1 " />{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="overflow-hidden ">
            <img src={blackhole} className="w-[30rem]" alt="" />
          </div>
        </div>
      </div>
    );
  };

  if (showMenu || showTechMenu) {
    return (
      <>
        <div
          onMouseLeave={toggleMenu}
          className={`relative ${
            showMenu ? "slide-down" : "slide-up"
          }  h-[83vh] bg-custom2 overflow-hidden z-[100]   `}
        >
          <HamburgerContent />
        </div>
      </>
    );
  } else {
    return (
      <div className="mainBg nav-box  h-[29rem] bg-center">
        <div className="  ">
          <nav className="flex justify-between items-center p-6 text-custom2 font-semibold fixed top-0 left-0 right-0 ">
            <ul className="flex justify-center items-center space-x-2">
              <li>
                <img src={logo} className="w-[2.5rem]" alt="logo" />
              </li>
              <li className="text-2xl">Evmos</li>
            </ul>
            <ul className="flex space-x-8 justify-center items-center text-custom2 font-semibold">
              <li
                onMouseEnter={handleMouseEnter}
                className=" flex justify-center items-center remove "
              >
                Technology <BiDownArrowAlt className="pt-[4px] text-2xl" />
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                className="flex  justify-center items-center remove "
              >
                Community <BiDownArrowAlt className="pt-[4px] text-2xl" />
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                className="flex justify-center items-center remove "
              >
                About <BiDownArrowAlt className="pt-[4px] text-2xl" />
              </li>
              <li
                onClick={toggleMenu}
                className="bg-orange-600 p-[0.35rem] w-[3rem] flex justify-center items-center rounded-lg"
              >
                {" "}
                <GiHamburgerMenu className="text-black text-3xl" />{" "}
              </li>
              <li className="">
                <button className="p-2 text-black bg-orange-600 rounded-lg w-[8rem]">
                  Launch App
                </button>
              </li>
            </ul>
          </nav>

          <div className="relative px-6">
            <div className="uppercase text-[0.7rem] text-white absolute top-28 right-80">
              <p>Go everywhere</p>
              <p>reach everywhere</p>
            </div>
            <div className="absolute top-40 evmos text-7xl w-[30rem] uppercase text-white font-extrabold">
              <p className={showText ? "fade-in" : "fade-out"}>
                {texts[textIndex]}
              </p>
            </div>

            <div className="uppercase text-[0.7rem]  text-white absolute top-80 left-12">
              <p>Go everywhere</p>
              <p>reach everywhere</p>
            </div>
            <div className="uppercase text-[0.7rem] text-white absolute top-96 left-[30rem]">
              <p>Go everywhere</p>
              <p>reach everywhere</p>
            </div>
            <div className="top-80 text-white flex flex-col   right-36 absolute">
              <p className="w-[18rem]  font-medium">
                Evmos is the operating system for applications of the future.
              </p>
              <div className="flex mt-4 space-x-4">
                <button className="bg-custom3 font-medium text-black p-1 h-[2.5rem] w-[10rem] rounded-lg">
                  Start Building
                </button>
                <button className="font-bold border-[1px] border-custom3 p-1 h-[2.5rem] w-[10rem] rounded-lg   ">
                  Read Manifesto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
