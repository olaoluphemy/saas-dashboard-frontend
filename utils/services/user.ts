import { User } from "@/app/_components/user/payload";
import { BASE_URL } from "../constants";

export async function login(
  email: string,
  password: string
): Promise<User | undefined> {
  try {
    if (!email || !password) return;

    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = (await res.json()) as { status: string; data: { user: User } };

    if (res.ok) return data.data.user;

    throw new Error(
      (data as unknown as { status: string; message: string }).message
    );
  } catch (error) {
    console.error(error);
    throw error;
    // throw new Error((error as { message: string; status: string }).message);
  }
}

export async function logout() {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    // console.log(data);
    if (res.ok) return data;

    throw new Error("something went wrong...");
  } catch (error) {
    console.error(error);
    throw error;
    // throw new Error((error as { message: string; status: string }).message);
  }
}

export async function updateUser(
  userData: {
    firstName?: string;
    lastName?: string;
    email?: string;
  },
  userId: string
): Promise<User | undefined> {
  try {
    if (Object.values(userData).every((cur) => !cur) || !userId) return;

    const res = await fetch(`${BASE_URL}/api/users/${userId}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = (await res.json()) as { status: string; data: { user: User } };

    if (!res.ok)
      throw new Error(
        (data as unknown as { status: string; message: string }).message
      );

    return data.data.user;
  } catch (err) {
    throw Error(err as string);
  }
}

export async function updatePassword(
  userData: {
    password: string;
    passwordConfirm: string;
    currentPassword: string;
  },
  userId: string
): Promise<{ status: string; message: string } | undefined> {
  try {
    if (Object.values(userData).some((cur) => !cur) || !userId) return;

    // console.log(userData);

    const res = await fetch(`${BASE_URL}/api/users/${userId}/update-password`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = (await res.json()) as { status: string; message: string };

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (err) {
    throw Error(err as string);
  }
}
