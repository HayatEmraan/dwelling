"use server";
import { cookies } from "next/headers";

export async function getroomstats() {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/getroomstats`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
