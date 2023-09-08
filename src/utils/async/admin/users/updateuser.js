"use server";
import { cookies } from "next/headers";

// id - dicision (user, admin or host)
export async function updateuser(id, decision) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/user/update?id=${id}&decision=${decision}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
