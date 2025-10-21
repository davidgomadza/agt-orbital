import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn(props.className)}
    >
      <defs>
        <linearGradient id="diamond-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4299E1', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3182CE', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M50 0 L100 50 L50 100 L0 50 Z"
          fill="url(#diamond-gradient)"
        />
        <path
          d="M50 0 L100 50 L50 100 L0 50 Z"
          stroke="#2B6CB0"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="50"
          y="57"
          fontFamily="sans-serif"
          fontSize="40"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          AGT
        </text>
      </g>
    </svg>
  );
}
