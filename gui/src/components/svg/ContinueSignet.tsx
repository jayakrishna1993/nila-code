interface NilaCodeSignetProps {
  /** Height of the signet in pixels */
  height?: number;
  /** Width of the signet in pixels */
  width?: number;
  /** Additional CSS classes to apply to the SVG */
  className?: string;
}

/**
 * The NILA_Code signet/logo symbol
 */
export default function ContinueSignet({
  height = 103,
  width = 107,
  className = "",
}: NilaCodeSignetProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 107 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon shape */}
      <polygon
        points="53.5,6 97,30 97,74 53.5,97 10,74 10,30"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
      />
      {/* Inner "N" letterform */}
      <text
        x="53.5"
        y="66"
        textAnchor="middle"
        fontSize="44"
        fontWeight="bold"
        fontFamily="monospace"
        fill="currentColor"
      >
        N
      </text>
    </svg>
  );
}
