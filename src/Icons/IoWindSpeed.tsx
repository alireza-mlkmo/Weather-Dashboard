const IoWindSpeed : React.FC = () => {
    return (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
      >
        <rect width="60" height="59.2405" fill="url(#pattern0_17_91)" />
        <defs>
          <pattern
            id="pattern0_17_91"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_17_91"
              transform="scale(0.0126582 0.0128205)"
            />
          </pattern>
          <image
            id="image0_17_91"
            width="79"
            height="78"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
}

export default IoWindSpeed