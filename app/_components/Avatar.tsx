import Image, { ImageProps } from "next/image";
import { P } from "./Paragraph";

interface AvatarProps extends ImageProps {
  size?: "xs" | "sm" | "lg" | number;
  name?: string;
}

function Avatar({ alt, src, size, name }: AvatarProps) {
  let resolution = 24;
  let containerSize = "size-6";

  if (size === "sm") {
    resolution = 48;
    containerSize = "size-12";
  }
  if (size === "lg") {
    resolution = 64;
    containerSize = "size-16";
  }

  const names = name?.split(" ");

  //   this suffices for custom sized avatars
  if (typeof size === "number") {
    resolution = size;
    containerSize = `size-${[size]}`;
  }

  return (
    <div
      className={`${containerSize} rounded-full ${
        names &&
        "transition-colors duration-[300ms] ease bg-black dark:bg-gray-200 flex items-center justify-center"
      }`}
    >
      {names ? (
        <P className="font-[600] text-white-250 transition-colors duration-[300ms] ease dark:!text-black">
          {names.at(0)?.slice(0, 1).toLocaleUpperCase()}
          {names.at(1)?.slice(0, 1).toUpperCase()}
        </P>
      ) : (
        <Image
          src={src || "/avatar-1.png"}
          alt={alt || "avatar-image"}
          height={resolution}
          width={resolution}
          style={{
            height: "full",
            width: "full",
          }}
          className="rounded-full"
        />
      )}
    </div>
  );
}

export default Avatar;
