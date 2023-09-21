"use server";
import { cookies } from "next/headers";
export async function grefund(id, msg) {
  const res = await fetch(`http://localhost:5000/api/v2/grefund?id=${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies().get("accessToken")?.value}`,
    },
    body: JSON.stringify({ msg: msg }),
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
