import React from "react";

interface NewsCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

import { gsap } from "gsap";
const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  const animateBorderOnHover = (element: any) => {
    const tl = gsap.timeline();

    tl.to(element, {
      duration: 0.5,
      borderColor: "yellow",
      ease: "power1.inOut",
    });

    tl.to(element, {
      duration: 0.5,
      borderColor: "black",
      ease: "power1.inOut",
    });

    tl.repeat(1);
  };
  return (
    <div className="flex flex-col   min-w-[23.1rem]  hover:text-orange-600    ">
      <img
        src={imageUrl}
        className="p-3 border-y-[1px] border-black border-x-[1px] border-x-custom3 rounded-3xl"
        onMouseEnter={(e) => animateBorderOnHover(e.currentTarget)}
        alt=""
      />
      <p className="font-bold my-4">{title}</p>
      <p className="text-slate-600 hover:text-slate-600 cursor-pointer ">
        {description}
      </p>
    </div>
  );
};

export default NewsCard;
