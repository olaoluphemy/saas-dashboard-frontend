import { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {
  size?: "xs" | "md" | "sm" | "lg";
}

function H({ size, className, children, ...rest }: HeaderProps) {
  let textSize = "text-2xl"; //24px

  if (size === "md") textSize = "text-[30px] xl:text-[40px] dark:text-gray-100";

  if (size === "lg")
    textSize = "text-3xl md:text-6xl xl:text-[64px] dark:text-gray-100";

  if (size === "sm" || !size)
    return (
      <h3
        className={`${className} ${textSize} font-[700] dark:text-gray-100 transition-colors duration-[300ms] ease`}
        {...rest}
      >
        {children}
      </h3>
    );

  if (size === "xs" || !size) {
    textSize = "";

    return (
      <h4
        className={`${className} ${textSize} font-[600] dark:text-gray-100 transition-colors duration-[300ms] ease`}
        {...rest}
      >
        {children}
      </h4>
    );
  }

  return (
    <h1
      className={`${className} ${textSize} font-[700] dark:text-gray-100 transition-colors duration-[300ms] ease`}
      {...rest}
    >
      {children}
    </h1>
  );
}

export default H;
