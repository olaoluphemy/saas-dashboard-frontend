// middleware.js
import { NextRequest, NextResponse } from "next/server";
// import { verifyJWT } from "./utils/auth";
// import { verifyJwt } from "./utils/auth"; // Your JWT verification utility

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;
  console.log(token, "chaii mehn");
  //   const isAuthenticated = token && (await verifyJWT(token));

  const protectedRoutes = ["/", "/dashboard", "/settings"];

  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!token) {
      // console.log("user is not logged in");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  //   matcher: ["/dashboard/:path*", "/profile/:path*"],
  matcher: ["/", "/dashboard/:path*", "/settings/:path*"],
};
