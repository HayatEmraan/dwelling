"use server";
import { cookies } from "next/headers";
export async function StripePay() {
  const res = await fetch(
    "https://dwelling-bright-server.vercel.app/api/v2/payment/strip/config",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      cache: "no-store",
    }
  );
  const { publishableKey } = await res.json();
  return publishableKey;
}

export async function StripeIntent(roomID, checkIn, checkOut, guest) {
  const res = await fetch(
    "https://dwelling-bright-server.vercel.app/api/v2/payment/stripe",
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
      cache: "no-store",
    }
  );
  const { clientSecret } = await res.json();
  return clientSecret;
}
