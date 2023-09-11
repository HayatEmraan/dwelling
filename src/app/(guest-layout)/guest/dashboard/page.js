// import Example from "@/components/dashboard/homePage/ChartSide";
import dynamic from "next/dynamic";
const Example = dynamic(
  () => {
    return import("@/components/guest/dashboard/homePage/ChartSide");
  },
  {
    ssr: false,
  }
);


import HomePageHeading from "@/components/dashboard/homePage/Heading";
import { fet } from "@/utils/async/admin/users/getusers";
import BookingHistory from "@/components/guest/dashboard/homePage/BookingHistory";
import CardContainer from "@/components/guest/dashboard/homePage/CardContainer";
import FetchCards from "@/components/home/cards/fetchcards";


const DashboardHomePage = async () => {
  const data = await FetchCards();
  return (
    <>
      <HomePageHeading />
      <div className="max-w-[150rem] lg:px-16 -mt-[70px] dark:bg-slate-700 dark:text-white">
        <CardContainer />

        {/*Dashboard user list with chart */}
        <div className="xl:flex items-center justify-between md:space-x-4 dark:bg-slate-700 dark:text-white">
         <BookingHistory />
         <div className="border-2 shadow-md rounded-md  w-full">
         <Example></Example>
         </div>
      </div>
      </div>
    </>
  );
};

export default DashboardHomePage;
