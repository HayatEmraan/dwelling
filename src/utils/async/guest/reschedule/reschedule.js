"use server";
import { cookies } from "next/headers";
export async function reschedule(id, start, end) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/reschedule?id=${id}`,
    {
      method: "PATH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      body: JSON.stringify({ start, end }),
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
