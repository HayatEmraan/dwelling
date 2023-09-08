export async function middleutils(req) {
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v2/user/getuserbycookie`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${req.cookies.get("accessToken")?.value}`,
      },
    }
  );
  return await res.json();
}
