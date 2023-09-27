import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface BoxProps {
  customText: string;
}
const TextReveal: React.FC<BoxProps> = ({ customText }) => {
  useEffect(() => {
    const SplitTypes = Array.from(
      document.querySelectorAll(".reveal-type")
    ) as HTMLElement[];

    SplitTypes.forEach((char) => {
      const text = new SplitType(char, { types: "chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);
  return (
    <div>
      <p>{customText}</p>
    </div>
  );
};

export default TextReveal;
