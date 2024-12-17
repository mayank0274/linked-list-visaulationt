type Props = {
  height: string;
  width: string;
  className?: string;
};

const RightArrowIcon = ({ height, width, className }: Props) => {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      id="left-arrow"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      transform="rotate(180)"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <line
          id="primary"
          x1={21}
          y1={12}
          x2={3}
          y2={12}
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
        <polyline
          id="primary-2"
          data-name="primary"
          points="6 9 3 12 6 15"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
      </g>
    </svg>
  );
};

export default RightArrowIcon;
