import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import UserProvider from "../_contexts/userContext";
import { User } from "./user/payload";
import { redirect } from "next/navigation";

async function ProtectLayout({ children }: { children: React.ReactNode }) {
  const token = (await cookies()).get("jwt")?.value;
  console.log({ token });

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    redirect("/login");
  }

  const res = await fetch(`http://localhost:8000/api/v1/users/${decoded.id}`);
  const data = (await res.json()) as { status: string; data: { user: User } };

  return <UserProvider user={data.data.user}>{children}</UserProvider>;
}

export default ProtectLayout;
