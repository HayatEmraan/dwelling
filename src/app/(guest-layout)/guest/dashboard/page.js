// import Example from "@/components/dashboard/homePage/ChartSide";
import dynamic from "next/dynamic";
const Example = dynamic(
  () => {
    return import("@/components/dashboard/homePage/ChartSide");
  },
  {
    ssr: false,
  }
);


import HomePageHeading from "@/components/dashboard/homePage/Heading";
import { getusers } from "@/utils/async/admin/users/getusers";
import BookingHistory from "@/components/guest/dashboard/homePage/BookingHistory";
import CardContainer from "@/components/guest/dashboard/homePage/CardContainer";

const DashboardHomePage = async () => {
  const data = await getusers();
  return (
    <>
      <HomePageHeading />
      <div className="max-w-[150rem] lg:px-16 -mt-[70px] dark:bg-slate-700 dark:text-white">
        <CardContainer />

        {/*Dashboard user list with chart */}
        <div className="xl:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
         <BookingHistory data={data}></BookingHistory>
         <div className="border-2 shadow-md rounded-md xl:w-96 w-full">
         <Example></Example>
         </div>
      </div>
      </div>
    </>
  );
};

export default DashboardHomePage;
