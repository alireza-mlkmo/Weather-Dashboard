const IoHumidityWhite : React.FC = () => {
    return (
      <svg
        width="60"
        height="51"
        viewBox="0 0 60 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
      >
        <rect width="60" height="50.1266" fill="url(#pattern0_17_227)" />
        <defs>
          <pattern
            id="pattern0_17_227"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_17_227"
              transform="scale(0.0126582 0.0151515)"
            />
          </pattern>
          <image
            id="image0_17_227"
            width="79"
            height="66"
            preserveAspectRatio="none"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
}

export default IoHumidityWhite;