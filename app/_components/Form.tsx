import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg";
}

export function Input({ className, inputSize, ...rest }: InputProps) {
  let py = "";

  if (inputSize === "sm") py = "!py-[11px]";

  return (
    <input
      {...rest}
      className={`border border-white-200 transition-colors duration-[300ms] ease dark:border-gray-700 dark:text-gray-100 p-[12.5px] rounded-md ${py} ${className}`}
    />
  );
}

export function Label({
  children,
  className,
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`text-sm ${className} transition-colors duration-[300ms] ease dark:text-gray-100`}
      {...rest}
    >
      {children}
    </label>
  );
}

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  labelStyle?: string;
  label: string;
  inputSize?: "sm" | "md" | "lg";
}

export function LabeledInput({
  children,
  label,
  labelStyle,
  className,
  inputSize,
  ...rest
}: LabeledInputProps) {
  let py = "";

  if (inputSize === "sm") py = "!py-[11px]";

  return (
    <div className="flex flex-col gap-[6px]">
      <Label className={labelStyle}>{label}</Label>

      {children ? (
        children
      ) : (
        <div className="flex gap-5 w-full">
          <Input {...rest} className={`w-full ${className} ${py}`} />
        </div>
      )}
    </div>
  );
}
