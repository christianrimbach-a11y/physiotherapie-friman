import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "large";
}

export default function SectionWrapper({
  children,
  className = "",
  size = "default",
}: SectionWrapperProps) {
  const padding = size === "large" ? "py-24" : "py-16";
  return (
    <section
      className={`w-full max-w-content mx-auto px-4 sm:px-6 lg:px-8 ${padding} ${className}`}
    >
      {children}
    </section>
  );
}
