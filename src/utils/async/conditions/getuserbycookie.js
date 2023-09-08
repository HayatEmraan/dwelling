"use server";
import { cookies } from "next/headers";
export async function getuserbycookie() {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/user/getuserbycookie`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    }
  );
  return await res.json();
}
