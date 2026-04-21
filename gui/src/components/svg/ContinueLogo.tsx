import { vscForeground } from "..";

interface NilaCodeLogoProps {
  height?: number;
  width?: number;
}

export default function ContinueLogo({
  height = 80,
  width = 240,
}: NilaCodeLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon icon */}
      <polygon
        points="35,8 58,21 58,47 35,60 12,47 12,21"
        stroke={vscForeground}
        strokeWidth="4"
        fill="none"
      />
      <text
        x="35"
        y="43"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fontFamily="monospace"
        fill={vscForeground}
      >
        N
      </text>
      {/* NILA_Code wordmark */}
      <text
        x="75"
        y="48"
        fontSize="28"
        fontWeight="bold"
        fontFamily="monospace"
        fill={vscForeground}
      >
        NILA_Code
      </text>
    </svg>
  );
}
