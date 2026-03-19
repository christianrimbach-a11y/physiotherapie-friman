import { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
}

export default function Label({
  htmlFor,
  children,
  required = false,
  className = "",
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-800 mb-1 ${className}`}
    >
      {children}
      {required && <span className="text-gray-600 ml-0.5" aria-hidden="true">*</span>}
    </label>
  );
}
