"use server";
import { cookies } from "next/headers";

const cookieOptions = {
  maxAge: 3600000,
  // secure: true, // Only set for HTTPS connections
  httpOnly: true,
  // domain: "dwelling-bright.vercel.app",
  // sameSite: "None", // Adjust as needed
  path: "/",
};
export const handleSignIn = async (email) => {
  const postData = await fetch(
    "https://dwelling-bright-server.vercel.app/api/v2/signature",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${email}`,
      },
      credentials: "include",
      cache: "no-store",
    }
  );
  const data = await postData.json();
  cookies().set("accessToken", data.token, cookieOptions);
  return data;
};
