import { NextResponse } from "next/server";
import { middleutils } from "./utils/helpers/middleutlis";

export async function middleware(req, res, next) {
  const verifyCookies = await middleutils(req);
  if (verifyCookies.msg === "Success") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
