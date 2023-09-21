import BookingControlPanel from "@/components/dashboard/bookingPage/BookingControlPanel";
import BookingInformationCard from "@/components/dashboard/bookingPage/BookingInformationCard";
import { getbookings } from "@/utils/async/admin/booking/getbookings";

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
