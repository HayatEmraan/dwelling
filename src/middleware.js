import { NextResponse } from "next/server";

export async function middleware(req, res, next) {
  return NextResponse.next();
}
