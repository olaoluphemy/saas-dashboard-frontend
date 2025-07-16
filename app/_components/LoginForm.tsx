"use client";

import { Button } from "./Button";
import { LabeledInput } from "./Form";
import H from "./Heading";
import { FormEvent, useState } from "react";
import { login } from "@/utils/services/user";
import { useRouter } from "next/navigation";
import EyeClosed from "@/app/_assets/password-close-icon.svg";
import EyeOpen from "@/app/_assets/password-open-icon.svg";
import { P } from "./Paragraph";
import { useUser } from "../_hooks/useUser";
import { Spinner } from "./Icons";

export default function LoginForm() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("testpasswordforsaasdashboarduser");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { dispatch } = useUser();

  const router = useRouter();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await login(email, password);

      if (data) dispatch({ type: "user/setUser", payload: data.user });

      router.replace("/");
      localStorage.setItem("jwt", data?.token || "");
      console.log("redirecting............");
    } catch (err) {
      setError((err as { message: string }).message);
    } finally {
      setIsLoading(false);
    }
  }

  console.log("mounted well");

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white-100 transition-colors duration-[300ms] ease dark:bg-gray-900 ">
      <form
        className="w-[80vw] h-[80vh] max-w-[540px] max-h-[548px] rounded-2xl bg-white transition-colors duration-[300ms] ease dark:bg-gray-800 p-6 space-y-10"
        onSubmit={handleLogin}
      >
        <H size="md" className="text-center">
          Login to your account
        </H>

        <LabeledInput
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-1.5 relative">
          <LabeledInput
            name="password"
            label="Password"
            type={isOpen ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <P size="sm" className="text-red-500">
            {error}
          </P>

          <button
            type="button"
            className="absolute top-[55%] right-[10px] size-5 outline-none"
            onClick={() => setIsOpen((s) => !s)}
          >
            {isOpen ? (
              <EyeClosed className="size-full dark:fill-white" />
            ) : (
              <EyeOpen className="size-full dark:fill-white" />
            )}
          </button>
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="primary"
            size="sm"
            className="w-full flex items-center justify-center"
          >
            {isLoading ? <Spinner height={20} /> : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}
