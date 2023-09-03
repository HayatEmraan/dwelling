"use server";
const SearchCookie = async (query) => {
  try {
    const response = await fetch(
      `https://dwelling-bright-server.vercel.app/api/v1/getlocations?query=${query}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const addresses = data.data?.map((feature) => ({
      address: feature,
    }));
    return addresses;
  } catch (error) {
    console.error("Error searching addresses:", error);
  }
};

export default SearchCookie;
