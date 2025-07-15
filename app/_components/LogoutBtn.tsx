"use client";

import { logout } from "@/utils/services/user";
import { Settings } from "./Icons";
import { P } from "./Paragraph";

function LogoutBtn() {
  async function handleLogout() {
    try {
      await logout();
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <button
      onClick={handleLogout}
      className={`py-3 pl-4 flex w-full items-center gap-2.5  hover:bg-blue-secondary dark:hover:dark:bg-gray-800 cursor-pointer rounded-xl`}
    >
      <div className="size-5">
        <Settings className="size-5" />
      </div>
      <P size="md" variant="semi-dark">
        Logout
      </P>
    </button>
  );
}

export default LogoutBtn;
