"use client";

import Link from "next/link";
import { P } from "./Paragraph";
import { usePathname } from "next/navigation";

export default function NavButton({
  children,
  href,
  location,
}: {
  children: React.ReactNode;
  href: string;
  location: string;
}) {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <Link
      href={href}
      className={`py-3 pl-4 flex items-center gap-2.5 ${
        href === pathName && "bg-blue-secondary dark:bg-gray-800"
      }  hover:bg-blue-secondary dark:hover:dark:bg-gray-800 cursor-pointer rounded-xl`}
    >
      <div className="size-5">{children}</div>
      <P
        size="md"
        variant="semi-dark"
        className={`${href === pathName && "dark:!text-white"}`}
      >
        {location}
      </P>
    </Link>
  );
}
