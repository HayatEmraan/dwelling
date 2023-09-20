import { getuserbycookie } from "@/utils/async/conditions/getuserbycookie";
import LoginAndSignModal from "./loginmodal";
import HandleLogout from "./handlelogout";

const AvatarComp = async () => {
  const response = await getuserbycookie();
  const user = response;
  return (
    <div className="cursor-pointer">
      {user?.msg === "Success" ? (
        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover sm:py-4">
          <button
            type="button"
            className="flex items-center w-full text-gray-800 hover:text-gray-500 font-medium dark:text-gray-200 dark:hover:text-gray-400"
          >
            <img
              className="rounded-full"
              src={user?.photoURL ? user?.photoURL : "/avatar.png"}
              alt=""
              width={24}
              height={24}
            />
          </button>
          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-50 bg-white sm:shadow-2xl rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
            {user?.data?.role === "admin" && (
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="/dashboard"
              >
                Dashboard
              </a>
            )}
            {user?.data?.role === "host" && (
              <>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="/host/dashboard"
                >
                  Dashboard
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="/dashboard/settings"
                >
                  Settings
                </a>
              </>
            )}
            {user?.data?.role === "user" && (
              <>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="/guest/dashboard"
                >
                  Dashboard
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="/dashboard/settings"
                >
                  Settings
                </a>
              </>
            )}
            <HandleLogout />
          </div>
        </div>
      ) : (
        <LoginAndSignModal />
      )}
    </div>
  );
};

export default AvatarComp;
