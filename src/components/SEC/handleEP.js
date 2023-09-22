"use server";
export const handleSignUp = async (email, name, photoURL) => {
  const postData = await fetch(
    "https://dwelling-bright-server.vercel.app/api/v1/postuser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, photoURL }),
    }
  );

  const data = await postData.json();
  return data;
};
