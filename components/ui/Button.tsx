import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  type = "button",
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-violet";
  const sizes =
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const variants =
    variant === "primary"
      ? "bg-grad-primary text-white shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0"
      : "bg-transparent text-white border border-line hover:border-white/30 hover:bg-white/5";

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${sizes} ${variants} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      {content}
    </button>
  );
}
