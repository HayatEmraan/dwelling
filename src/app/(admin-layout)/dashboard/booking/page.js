import BookingControlPanel from "@/components/dashboard/bookingPage/BookingControlPanel";
import BookingInformationCard from "@/components/dashboard/bookingPage/BookingInformationCard";

const Booking = () => {
  return (
    <div className="dark:bg-slate-700 dark:!text-white">
      <BookingInformationCard />
      <BookingControlPanel />
    </div>
  );
};

export default Booking;
