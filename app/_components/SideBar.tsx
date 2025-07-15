import Avatar from "./Avatar";
import H from "./Heading";
import LogoutBtn from "./LogoutBtn";
import ThemeToggle from "./ThemeToggle";
import NavButton from "./NavButton";
import { navLinks } from "@/utils/data";

function SideBar() {
  return (
    <aside className="border-r transition-colors duration-[300ms] ease dark:bg-gray-900 border-white-200 dark:border-gray-700 px-2 xl:px-4 py-18 overflow-auto h-[100vh] hidden lg:flex flex-col gap-20">
      <div className="flex items-center gap-2.5">
        <Avatar src="" alt="logo-img" size="lg" name="Lo Go" />
        <H size="md">Logo</H>
      </div>

      <ul className="space-y-4">
        {navLinks.map((cur, i) => (
          <li key={i}>
            <NavButton href={cur.href} location={cur.location}>
              <cur.Icon />
            </NavButton>
          </li>
        ))}
        <li>
          <LogoutBtn />
        </li>
      </ul>

      <ThemeToggle />
    </aside>
  );
}

export default SideBar;
