import { HTMLAttributes } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dark" | "semi-dark" | "light" | "gray" | "success" | "blue";
}

export function P({
  children,
  className,
  size,
  variant = "dark",
}: ParagraphProps) {
  let textSize = "";
  let color = "";

  if (variant === "dark") color = "dark:text-gray-100";
  if (variant === "semi-dark") color = "!text-gray-primary dark:text-gray-100";
  if (variant === "light") color = "!text-[#FAFCFE]";
  if (variant === "gray") color = "!text-gray-primary";
  if (variant === "success") color = "!text-green-primary";
  if (variant === "blue") color = "!text-blue-primary";

  if (!size) textSize = "";
  if (size === "sm") textSize = "text-xs";
  if (size === "md") textSize = "text-sm"; // 14px
  if (size === "lg") textSize = "text-lg"; // 18px
  if (size === "xl") textSize = "text-2xl"; // 24px

  return (
    <p
      className={`${color} ${textSize} ${className} transition-colors duration-[300ms] ease`}
    >
      {children}
    </p>
  );
}
