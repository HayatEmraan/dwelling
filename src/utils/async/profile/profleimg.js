"use server";
import { cookies } from "next/headers";
export async function profileimg(id, photoURL) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/user/updateimg?id=${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      body: JSON.stringify({
        photoURL,
      }),
    }
  );
  return await res.json();
}
