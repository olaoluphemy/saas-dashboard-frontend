"use client";

// import { test } from "@/utils/data";
import Avatar from "./Avatar";
import { P } from "./Paragraph";
import Table from "./Table";
import { useEffect, useState } from "react";

interface UsersData {
  name: string;
  signupDate: string;
  status: string;
}

export default function RecentUsers() {
  // const token = (await cookies()).get("jwt")?.value;
  // console.log({ token });

  // const res = await fetch(`${BASE_URL}/api/v1/users/recent-signups`, {
  //   method: "GET",
  //   headers: {
  //     authorization: `Bearer ${token}`,
  //   },
  // });

  // const recentSignups = await res.json();

  // console.log({ recentSignups });

  const [recentSignups, setRecentSignUps] = useState<UsersData[]>();

  useEffect(() => {
    async function getRecentSignups() {
      const res = await fetch(`/api/v1/users/recent-signups`, {
        method: "GET",
        credentials: "include",
      });

      const data: { status: string; data: { users: UsersData[] } } =
        await res.json();

      setRecentSignUps(data.data.users);
    }

    getRecentSignups();
  }, []);

  if (!recentSignups)
    return (
      <div className="h-[260px] md:h-[400px] 2xl:h-[600px] bg-gray-200 dark:opacity-20 animate-pulse rounded-xl"></div>
    );

  return (
    <Table<UsersData>
      cols="grid-cols-[2fr_2fr_1fr_1fr] sm:grid-cols-4 min-w-[600px]"
      colData={["Name", "Signup Date", "Status", "xxx"]}
      tableStyle="py-2 rounded-xl"
      tableheadStyle="py-4 border-b border-white-200 dark:border-gray-700"
      rowData={recentSignups || []}
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
