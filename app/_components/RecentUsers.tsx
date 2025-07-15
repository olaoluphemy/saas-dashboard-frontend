import { test } from "@/utils/data";
import Avatar from "./Avatar";
import { P } from "./Paragraph";
import Table from "./Table";
import { cookies } from "next/headers";

interface UsersData {
  name: string;
  signupDate: string;
  status: string;
}

export default async function RecentUsers() {
  const token = (await cookies()).get("jwt")?.value;
  console.log({ token });

  const res = await fetch("http://localhost:8000/api/v1/users/recent-signups", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const recentSignups = await res.json();

  console.log({ recentSignups });

  return (
    <Table<UsersData>
      cols="grid-cols-[2fr_2fr_1fr_1fr] sm:grid-cols-4 min-w-[600px]"
      colData={["Name", "Signup Date", "Status", "xxx"]}
      tableStyle="py-2 rounded-xl"
      tableheadStyle="py-4 border-b border-white-200 dark:border-gray-700"
      rowData={test}
      render={(data, i) => (
        <ul
          key={i}
          className="grid grid-cols-[2fr_2fr_1fr_1fr] sm:grid-cols-4 divide divide-white-200 dark:divide-gray-700"
        >
          <li className="py-3 pl-5 border-b flex items-center gap-3">
            <Avatar size="lg" src={"/avatar-6.jpg"} alt="" />
            <P>{data.name}</P>
          </li>
          <li className="py-3 pl-0 border-b flex items-center">
            <P>{data.signupDate}</P>
          </li>
          <li className="py-3 pl-0 border-b flex items-center">
            <P variant="success">{data.status}</P>
          </li>
          <li className="py-3 pl-0 border-b border-white-200 dark:border-gray-700 flex items-center">
            <P>xxx</P>
          </li>
        </ul>
      )}
    />
  );
}
