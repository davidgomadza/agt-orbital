import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cn("text-primary", props.className)}
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="20"cy="20" r="8" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 2V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20 34V38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M38 20H34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M6 20H2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M32.4854 7.51465L29.657 10.3431" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10.3431 29.6569L7.51471 32.4853" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M32.4854 32.4853L29.657 29.6569" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10.3431 10.3431L7.51471 7.51471" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
