import React, { useRef } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import newsImg1 from "../assets/_images_evmos-news_1.jpg";
import newsImg2 from "../assets/_images_evmos-news_2.jpg";
import newsImg3 from "../assets/_images_evmos-news_10.jpg";
import NewsCard from "./NewsCard";

const News: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400;
    }
  };

  return (
    <div className="px-6 bg-custom3">
      <div>
        <p className="uppercase evmos text-[11rem] w-full">Evmos news</p>
      </div>
      <div className="flex ">
        <div className="flex space-x-4">
          <BsArrowLeftSquare
            className="text-3xl text-black cursor-pointer hover:bg-orange-500 hover:text-white"
            onClick={scrollLeft}
          />
          <BsArrowRightSquare
            className="text-black text-3xl cursor-pointer hover:bg-orange-500 hover:text-white"
            onClick={scrollRight}
          />
        </div>
      </div>
      <div
        className="flex overflow-x-auto space-x-10 scroll py-20"
        ref={scrollContainerRef}
      >
        <NewsCard
          imageUrl={newsImg1}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg2}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg3}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg1}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg2}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg3}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg1}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg2}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
        <NewsCard
          imageUrl={newsImg3}
          title="Phalcon x Evmos"
          description="The integration of Phalcon with Evmos brings several synchronized growth aspects, including detailed visual insights into function calls, fund flows, real-time monitoring of balance changes, gas consumption analysis, and seamless debugging functionality."
        />
      </div>
    </div>
  );
};

export default News;
