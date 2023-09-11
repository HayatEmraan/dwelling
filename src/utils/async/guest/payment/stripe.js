"use server";
import { cookies } from "next/headers";
export async function StripePay() {
  const res = await fetch("http://localhost:5000/api/v2/payment/strip/config", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies().get("accessToken")?.value}`,
    },
    cache: "no-store",
  });
  const { publishableKey } = await res.json();
  return publishableKey;
}

export async function StripeIntent() {
  const res = await fetch("http://localhost:5000/api/v2/payment/stripe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies().get("accessToken")?.value}`,
    },
    cache: "no-store",
  });
  const { clientSecret } = await res.json();
  return clientSecret;
}
