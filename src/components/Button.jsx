import React from "react";

const VoltageButton = ({ text = "Order Now" }) => {
  return (
    <div className="voltage-button">
      <button className="voltage-main-button">{text}</button>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 234.6 61.3"
        preserveAspectRatio="none"
        className="voltage-svg"
      >
        <filter id="glow">
          <feGaussianBlur
            className="blur"
            result="coloredBlur"
            stdDeviation="2"
          ></feGaussianBlur>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.075"
            numOctaves="0.3"
            result="turbulence"
          ></feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displace"
          ></feDisplacementMap>
          <feMerge>
            <feMergeNode in="coloredBlur"></feMergeNode>
            <feMergeNode in="coloredBlur"></feMergeNode>
            <feMergeNode in="coloredBlur"></feMergeNode>
            <feMergeNode in="displace"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <path
          className="voltage line-1"
          d="M216.3 51.2c-3.7 0-..."
          fill="transparent"
          stroke="#fff"
        ></path>
        <path
          className="voltage line-2"
          d="M216.3 52.1c-3 0-..."
          fill="transparent"
          stroke="#fff"
        ></path>
      </svg>
    </div>
  );
};

export default VoltageButton;
