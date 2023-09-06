import UsersList from "@/components/dashboard/usersPage/UsersList";
import { cookies } from "next/headers";
const res = await fetch(
  "https://dwelling-bright-server.vercel.app/api/v2/getusers",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies().get("accessToken")?.value}`,
    },
  }
);
const data = await res.json();
const UsersPage = () => {
    return (
        <div>
            <UsersList data={data.data} />
        </div>
    );
};

export default UsersPage;