"use server";
import { cookies } from "next/headers";

export async function postreview(id, comment, rating) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/review?id=${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      body: JSON.stringify({
        comment,
        rating,
      }),
    }
  );
  return await res.json();
}
