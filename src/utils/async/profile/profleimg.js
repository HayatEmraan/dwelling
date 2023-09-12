"use server";
import { cookies } from "next/headers";
export async function profileimg(photoURL) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/user/updateimg`,
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
