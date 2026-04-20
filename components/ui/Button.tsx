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

const ICON_STROKE_ON_DARK_BG = "#FFFFFF";
const ICON_STROKE_ON_LIGHT_BG = "#000000";

function ArrowIcon({ strokeColor }: { strokeColor: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ strokeColor }: { strokeColor: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.99a16 16 0 0 0 6 6l1.53-1.28a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

  const iconStroke = variant === "primary" ? ICON_STROKE_ON_DARK_BG : ICON_STROKE_ON_LIGHT_BG;

  if ("href" in props && props.href) {
    const isPhoneLink = props.href.startsWith("tel:");
    return (
      <Link href={props.href} className={styles} aria-label={props["aria-label"]}>
        {children}
        {showArrow &&
          (isPhoneLink ? <PhoneIcon strokeColor={iconStroke} /> : <ArrowIcon strokeColor={iconStroke} />)}
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
      {showArrow && <ArrowIcon strokeColor={iconStroke} />}
    </button>
  );
}
