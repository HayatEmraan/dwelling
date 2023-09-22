"use server";
import { cookies } from "next/headers";

export async function removecookie() {
  return cookies().delete("accessToken");
}
