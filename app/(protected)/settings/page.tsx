"use client";

import { Input, LabeledInput } from "@/app/_components/Form";
import H from "@/app/_components/Heading";
import { P } from "@/app/_components/Paragraph";
import Image from "next/image";
import Upload from "@/app/_assets/upload-icon.svg";
import { Button } from "../../_components/Button";
import AppLayout from "../../_components/AppLayout";
import { FormEvent, useEffect, useState } from "react";
import { updatePassword, updateUser } from "@/utils/services/user";
import { User } from "@/app/_components/user/payload";
import { useUser } from "@/app/_hooks/useUser";
import { Spinner } from "@/app/_components/Icons";

function Page() {
  const {
    state: { user },
    dispatch,
  } = useUser();
  const [firstName, setFisrtName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.lastName || !user.firstName || !user.email) return;
    setFisrtName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  }, [user]);

  async function handlePasswordChange(e: FormEvent) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const userData = Object.fromEntries(formData) as {
        password: string;
        currentPassword: string;
        passwordConfirm: string;
      };

      if (Object.values(userData).some((cur) => !cur)) return;

      await updatePassword(userData, user?.id || "");
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);
      const userData = Object.fromEntries(formData) as unknown as User;
      // const obj = Object.entries(userData) as unknown as [
      //   key: keyof User,
      //   value: string
      // ];

      // const filtered = obj.reduce(
      //   (acc, [key, value]: [key: keyof User, value: string]) =>
      //     value === user[key] ? acc : ({ ...acc, key: value } as User),
      //   {} as User
      // );

      const updatedUser = await updateUser(userData, user?.id || "");
      // @ts-expect-error pls ignore thanks
      dispatch({ type: "user/setUser", payload: updatedUser });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AppLayout>
      <div className="h-[calc(100vh-89px)] md:h-[calc(100vh-97px)] overflow-auto p-6 bg-white-100 transition-colors duration-[300ms] ease dark:bg-gray-800">
        <div className="p-6 bg-white transition-colors duration-[300ms] ease dark:bg-gray-900 rounded-[18px] space-y-6">
          <H>Settings</H>

          <P>Account settings</P>

          <div className="lg:grid grid-cols-[36%_auto] gap-20 2xl:items-center">
            <div className="p-[44px] border border-white-200 transition-colors duration-[300ms] ease dark:border-gray-700 space-y-[22px]">
              <div className="relative">
                <Image
                  style={{
                    width: "100%",
                  }}
                  src="/avatar-6.jpg"
                  alt="user-avatar"
                  height={280}
                  width={280}
                />
                <button className="absolute bottom-0 left-0 p-3 bg-[rgba(0,0,0,0.5)] w-full flex items-center justify-center gap-2">
                  <input
                    type="file"
                    className="size-full opacity-0 cursor-pointer absolute"
                  />
                  <Upload />
                  <span className="text-white text-sm">Upload Photo</span>
                </button>
              </div>

              <P size="md" variant="gray" className="text-center">
                Image size should be under 10MB
              </P>
            </div>

            <form className="space-y-6 2xl:space-y-14" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 items-end gap-5">
                <LabeledInput
                  label="Full name"
                  placeholder="First name"
                  size={48}
                  className="2xl:!py-6"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFisrtName(e.target.value)}
                />
                <Input
                  placeholder="Last Name"
                  size={48}
                  className="2xl:!py-6"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <LabeledInput
                label="Email"
                placeholder="Email address"
                className="2xl:py-6"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                size="sm"
                variant="primary"
                className="2xl:!py-6"
                type="submit"
                disabled={firstName === user?.firstName}
              >
                {isLoading ? <Spinner height={20} /> : "Save Changes"}
              </Button>
            </form>
          </div>

          <H>Change Password</H>
          <form
            className="space-y-6 xl:max-w-[58%]"
            onSubmit={handlePasswordChange}
          >
            <LabeledInput
              label="Current Password"
              className="2xl:py-6"
              placeholder="Password"
              name="currentPassword"
              // type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <LabeledInput
              label="New Password"
              className="2xl:py-6"
              placeholder="Password"
              name="password"
              // type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LabeledInput
              label="Confirm Password"
              className="2xl:py-6"
              placeholder="Confirm new password"
              name="passwordConfirm"
              // type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            <Button
              variant="primary"
              size="sm"
              type="submit"
              disabled={!password || !passwordConfirm || !currentPassword}
            >
              Change Password
            </Button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}

export default Page;
