import BookingControlPanel from "@/components/dashboard/bookingPage/BookingControlPanel";
import BookingInformationCard from "@/components/dashboard/bookingPage/BookingInformationCard";
import { getbookings } from "@/utils/async/admin/booking/getbookings";


export const metadata = {
  title: "Booking - Admin",
  description: "A project by BrightCoders team",
};


const Booking = async () => {
  const data = await getbookings();
  return (
    <div className="dark:bg-slate-700 dark:!text-white">
      <BookingInformationCard />
      <BookingControlPanel data={data} />
    </div>
  );
};

export default Booking;
