"use server";
import { cookies } from "next/headers";
export async function grefund() {
  const res = await fetch(`http://localhost:5000/api/v2/grefund`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies().get("accessToken")?.value}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
