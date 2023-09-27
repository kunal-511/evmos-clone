import React from "react";
type BlinkingTextProps = {
  additionalClassName?: string;
};

const BlinkingText: React.FC<BlinkingTextProps> = ({ additionalClassName }) => {
  const baseClassName = "absolute  text-xs uppercase inline-block blink-text";
  const className = additionalClassName
    ? `${baseClassName} ${additionalClassName}`
    : baseClassName;

  return (
    <div className={className}>
      <p>
        <span>g</span>
        <span>o</span>
        <span> </span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
        <span>w</span>
        <span>h</span>
        <span>e</span>
        <span>r</span>
        <span>e</span>
      </p>
      <p>
        <span>r</span>
        <span>e</span>
        <span>a</span>
        <span>c</span>
        <span>h</span>
        <span> </span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
        <span>w</span>
        <span>h</span>
        <span>e</span>
        <span>r</span>
        <span>e</span>
      </p>
    </div>
  );
};

export default BlinkingText;
