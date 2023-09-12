"use server";
export async function cloudinaryUpload(image) {
  const form = new FormData();
  form.append("file", image);
  form.append("upload_preset", "vflnndvq");
  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dkozp31ij/image/upload",
    {
      method: "POST",
      body: form,
    }
  );
  return await response.json();
}
