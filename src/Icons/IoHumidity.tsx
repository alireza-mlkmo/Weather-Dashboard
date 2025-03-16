import React from "react";

const IoHumidity: React.FC = () => {
  return (
    <svg
    className="text-white"
      width="60"
      height="51"
      viewBox="0 0 60 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="60" height="50.1266" fill="url(#pattern0_233_51)" />
      <defs>
        <pattern
          id="pattern0_233_51"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_233_51"
            transform="scale(0.0126582 0.0151515)"
          />
        </pattern>
        <image
          id="image0_233_51"
          width="79"
          height="66"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default IoHumidity;
