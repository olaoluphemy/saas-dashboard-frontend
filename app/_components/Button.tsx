import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "xs" | "sm" | "lg" | "md";
  variant: "primary" | "secondary" | "light" | "danger" | "success";
}

export function Button({
  size = "sm",
  variant,
  children,
  className,
  ...rest
}: ButtonProps) {
  let baseStyle = "";
  let bgColor = "";

  if (size === "xs") baseStyle = "py-[10px] !px-6 !rounded-lg text-sm";
  if (size === "sm") baseStyle = "!py-[14px] !px-6 !rounded-lg text-sm"; // 48px
  if (size === "md")
    baseStyle = "max-[400px]:!p-5 !py-[14px] !px-8 !rounded-lg text-lg"; // 56px
  if (size === "lg") baseStyle = "!py-6 px-6 !rounded-lg";

  if (variant === "primary") bgColor = "bg-blue-primary text-white";
  if (variant === "secondary") bgColor = "bg-blue-secondary text-blue-primary";
  if (variant === "light") bgColor = "bg-white border border-white-150";
  if (variant === "danger") bgColor = "bg-danger-100 text-danger";
  if (variant === "success") bgColor = "bg-green-secondary text-green-primary";

  return (
    <button
      {...rest}
      className={`${className} ${baseStyle} ${bgColor} cursor-pointer disabled:cursor-not-allowed disabled:opacity-80`}
    >
      {children}
    </button>
  );
}
