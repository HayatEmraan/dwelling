"use server";
import { cookies } from "next/headers";

export async function updatebooking(id, decision) {
  const res = await fetch(
    `http://localhost:5000/api/v2/updatebooking?id=${id}&decision=${decision}`,
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
