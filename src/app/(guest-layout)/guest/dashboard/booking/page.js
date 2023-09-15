import GuestBookingControlPanel from "@/components/guest/dashboard/bookingPage/GuestBookingControlPanel";
import GuestBookingInformationCard from "@/components/guest/dashboard/bookingPage/GuestBookingInformationCard";

const Booking = () => {
  return (
    <div>
      <GuestBookingInformationCard />
      <GuestBookingControlPanel />
    </div>
  );
};

export default Booking;
