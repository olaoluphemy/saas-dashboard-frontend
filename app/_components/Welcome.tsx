"use client";

import React from "react";
import H from "./Heading";
import { Wave } from "./Icons";
import { useUser } from "../_hooks/useUser";

export default function Welcome() {
  const {
    state: { user },
  } = useUser();

  return (
    <>
      <H size="md">
        Welcome back,{" "}
        <span className="text-blue-primary">
          {user?.firstName} {user?.lastName}
        </span>
      </H>
      {user?.firstName && <Wave />}
    </>
    // <>
    //   {user?.firstName ? (
    //     <>
    //       <H size="md">
    //         Welcome back,{" "}
    //         <span className="text-blue-primary">
    //           {user?.firstName} {user?.lastName}
    //         </span>
    //       </H>
    //       <Wave />
    //     </>
    //   ) : (
    //     <>
    //       <div className="h-[30px] xl:h-[60px] w-[45%] bg-white animate-pulse rounded-xl"></div>
    //     </>
    //   )}
    // </>
  );
}
