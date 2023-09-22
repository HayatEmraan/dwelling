"use server";
import { cookies } from "next/headers";
export async function SSLCommerz(roomID, checkIn, checkOut, guest) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/payment/ssl`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      body: JSON.stringify({
        roomID,
        checkIn,
        checkOut,
        guest,
      }),
    }
  );
  return await res.json();
}
