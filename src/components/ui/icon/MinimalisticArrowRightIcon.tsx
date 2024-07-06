import React from "react";
import { IconProps } from "@lib/types/types";

const MinimalisticArrowRightIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="arrow-ios-forward">
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />

          <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
        </g>
      </g>
    </svg>
  );
};

export default MinimalisticArrowRightIcon;
