import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "primaryInvert" | "secondary";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  disabled?: boolean;
  showArrow?: boolean;
  "aria-label"?: string;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-black text-white border border-black hover:bg-gray-900 hover:border-gray-900 transition-colors focus-ring",
  primaryInvert:
    "bg-white text-black border border-white hover:bg-gray-200 hover:border-gray-200 transition-colors focus-ring",
  secondary:
    "bg-transparent text-gray-900 border border-gray-800 hover:bg-gray-100 hover:border-gray-900 transition-colors focus-ring",
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  disabled = false,
  showArrow = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-button transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const styles = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={styles} aria-label={props["aria-label"]}>
        {children}
        {showArrow && <ArrowIcon />}
      </Link>
    );
  }

  const { type = "button", onClick } = props as ButtonAsButton;
  return (
    <button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}
      aria-label={props["aria-label"]}
    >
      {children}
      {showArrow && <ArrowIcon />}
    </button>
  );
}
