import { NextResponse } from "next/server";
import { middleutils } from "./utils/helpers/middleutlis";

export async function middleware(req, res, next) {
  const verifyCookies = await middleutils(req);
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (
      verifyCookies.msg === "Success" &&
      verifyCookies.data.role === "admin"
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else if (req.nextUrl.pathname.startsWith("/host")) {
    if (verifyCookies.msg === "Success" && verifyCookies.data.role === "host") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else if (req.nextUrl.pathname.startsWith("/guest")) {
    if (verifyCookies.msg === "Success" && verifyCookies.data.role === "user") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else if (req.nextUrl.pathname.startsWith("/new-listing")) {
    if (verifyCookies.msg === "Success" && verifyCookies.data.role === "host") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/host/:path*",
    "/guest/:path*",
    "/new-listing/:path*",
  ],
};
