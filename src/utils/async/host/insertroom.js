"use server";
import { cookies } from "next/headers";
export async function insertroom(room) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/insertroom`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      body: JSON.stringify(room),
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
