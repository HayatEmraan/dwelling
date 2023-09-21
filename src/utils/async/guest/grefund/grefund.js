"use server";
import { cookies } from "next/headers";
export async function grefund(id, msg) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/grefund?id=${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      body: JSON.stringify({ msg }),
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
