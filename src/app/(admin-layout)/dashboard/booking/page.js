import BookingControlPanel from "@/components/dashboard/bookingPage/BookingControlPanel";
import BookingInformationCard from "@/components/dashboard/bookingPage/BookingInformationCard";


const Booking = () => {
  return (
    <div>
      <BookingInformationCard />
      <BookingControlPanel />
    </div>
  );
};

export default Booking;
