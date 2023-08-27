import Search from "@/components/Search/Search";
import SelectOption from "@/components/SelectOption/SelectOption";
import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const users = [
  {
    userId: 1,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
  {
    userId: 2,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
  {
    userId: 3,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
  {
    userId: 4,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
  {
    userId: 5,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
  {
    userId: 6,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
  {
    userId: 7,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
  {
    userId: 8,
    name: "Harold Gonzaled",
    image:
      "https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg",
    phone: "+97524621",
    email: "harold@gon.com",
    location: "Florida, United State",
    status: "active",
  },
];

const UsersList = () => {
  return (
    <div className="mx-6">
      <h3 className="text-2xl font-semibold p-3 mt-3">Users</h3>
      <div className="overflow-x-auto  mt-2 pb-6  bg-white rounded-lg dark:bg-slate-800 dark:text-white">
        <div className="p-4">
          <div className="flex justify-between items-center mt-3">
            <Search />
            <SelectOption />
          </div>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border border-slate-200 bg-slate-100 text-[14px] text-gray-700 dark:bg-slate-800 dark:text-white">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>User</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ userId, name, image, phone, email, location, status }) => (
                <tr
                  key={userId}
                  className="hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900"
                >
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="whitespace-nowrap flex items-center space-x-2">
                    <Image
                      src={image}
                      alt="Profile Picture"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p>{name}</p>
                  </td>
                  <td className="whitespace-nowrap">{phone}</td>
                  <td className="whitespace-nowrap">{email}</td>
                  <td className="whitespace-nowrap">{location}</td>
                  <td className="whitespace-nowrap">{status}</td>
                  <td className="whitespace-nowrap space-x-3">
                    <button>
                      <FiEdit />
                    </button>
                    <button>
                      <RiDeleteBinLine />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center flex-col md:flex-row md:justify-between items-center bg-white pr-4 pb-4 mb-6 rounded-b-lg">
        <div className="pl-4 mb-4 md:mb-0">
          <p>Showing 1 to 8 of 12 entries</p>
        </div>
        <div className="">
          <div className="join">
            <button className="join-item btn capitalize">Previous</button>
            <button className="join-item btn capitalize">1</button>
            <button className="join-item btn capitalize btn-active bg-blue-400">
              2
            </button>
            <button className="join-item btn capitalize">3</button>
            <button className="join-item btn capitalize">4</button>
            <button className="join-item btn capitalize">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
