import React from "react";

const FetchData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return (
    <div>
      {users?.length}
      {users.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
};

export default FetchData;
