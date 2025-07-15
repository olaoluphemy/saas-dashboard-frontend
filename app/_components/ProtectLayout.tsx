import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import UserProvider from "../_contexts/userContext";
import { User } from "./user/payload";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/utils/constants";

async function ProtectLayout({ children }: { children: React.ReactNode }) {
  const token = (await cookies()).get("jwt")?.value;

  console.log({ token });

  if (!token) redirect("/login");

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET || "");
  } catch {
    redirect("/login");
  }

  if (typeof decoded === "object" && "id" in decoded) {
    const res = await fetch(`${BASE_URL}/api/v1/users/${decoded.id}`);
    const data = (await res.json()) as { status: string; data: { user: User } };

    return <UserProvider user={data.data.user}>{children}</UserProvider>;
  } else redirect("/login");
}

export default ProtectLayout;
