"use server";
import { cookies } from "next/headers";
export async function getbookings(page) {
  const res = await fetch(
    `http://localhost:5000/api/v2/getbookings?page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${cookies().get("accessToken")?.value}`,
      },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
