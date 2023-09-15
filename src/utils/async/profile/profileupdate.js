"use server";
import { cookies } from "next/headers";
export async function profileupdate(
  name,
  address,
  city,
  phone,
  country,
  dob,
  postcode,
  organization,
  dialingCode
) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/user/updateinfo`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      body: JSON.stringify({
        name,
        address,
        city,
        phone,
        country,
        dob,
        postcode,
        organization,
        dialingCode,
      }),
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
