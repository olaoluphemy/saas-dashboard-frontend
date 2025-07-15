import Link from "next/link";
import { P } from "./Paragraph";
import { Dashboard, Settings } from "./Icons";
import Avatar from "./Avatar";
import H from "./Heading";
import { SetStateAction, useEffect, useRef } from "react";
import LogoutBtn from "./LogoutBtn";
import ThemeToggle from "./ThemeToggle";

function SideBar({
  isOpen,
  setIsOpen,
}: {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const clientWidth = useRef<number | null>(null);

  useEffect(() => {
    clientWidth.current = document.documentElement.clientWidth;

    function handler() {
      const widthDifference =
        document.documentElement.clientWidth - Number(clientWidth.current);
      if (widthDifference > 80) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [setIsOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 h-screen w-screen z-5 backdrop-blur-[3px] transition-all duration-500 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-[100%]"
        } fixed top-0 left-0 lg:relative h-screen border-r border-white-200 dark:border-gray-700 px-2 xl:px-4 py-18 overflow-auto  flex flex-col gap-20 lg:hidden transition-transform duration-[200ms] ease-in w-[55%] bg-white z-10 dark:bg-gray-900 max-w-[400px]`}
      >
        <div className="flex items-center gap-2.5">
          <Avatar src="" alt="logo-img" size="lg" name="Lo Go" />
          <H size="md">Logo</H>
        </div>

        <ul>
          <li>
            <Link
              href="/dashboard"
              className="py-3 pl-4 flex items-center gap-2.5 hover:bg-blue-secondary cursor-pointer rounded-xl"
            >
              <div className="size-5">
                <Dashboard className="size-5 text-gray-primary" />
              </div>
              <P size="md" variant="semi-dark">
                Dashboard
              </P>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="py-3 pl-4 flex items-center gap-2.5 hover:bg-blue-secondary cursor-pointer rounded-xl"
            >
              <div className="size-5">
                <Settings className="size-5 text-gray-primary" />
              </div>
              <P size="md" variant="semi-dark">
                Settings
              </P>
            </Link>
          </li>
          <li>
            <LogoutBtn />
          </li>
        </ul>

        <ThemeToggle />
      </aside>
    </>
  );
}

export default SideBar;
