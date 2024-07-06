import React from "react";
import { IconProps } from "@lib/types/types";

const CancelCrossIcon = ({ width, height }: IconProps) => {
  return (
    <>
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 512 640"
        xmlSpace="preserve"
        width={width}
        height={height}
      >
        <g>
          <path d="M274.102,256L469.851,60.251c2.418-2.417,3.749-5.632,3.749-9.051c0-3.419-1.331-6.633-3.749-9.052   c-2.419-2.417-5.632-3.749-9.051-3.749c-3.418,0-6.633,1.332-9.05,3.75L256,237.898L60.251,42.148   C57.834,39.731,54.619,38.4,51.2,38.4c-3.419,0-6.634,1.332-9.051,3.75S38.4,47.781,38.4,51.2c0,3.419,1.332,6.633,3.749,9.051   L237.898,256L42.149,451.75c-2.417,2.417-3.749,5.631-3.749,9.05c0,3.42,1.332,6.633,3.75,9.052   c2.417,2.418,5.632,3.748,9.051,3.748s6.633-1.331,9.051-3.749L256,274.102l195.75,195.751c2.417,2.417,5.632,3.748,9.05,3.748   c3.419,0,6.632-1.331,9.051-3.749c2.418-2.418,3.749-5.632,3.749-9.051c0-3.418-1.331-6.633-3.749-9.051L274.102,256z" />
        </g>
      </svg>
    </>
  );
};

export default CancelCrossIcon;
