import GuestBookingControlPanel from "@/components/guest/dashboard/bookingPage/GuestBookingControlPanel";
import GuestBookingInformationCard from "@/components/guest/dashboard/bookingPage/GuestBookingInformationCard";
import { gbookings } from "@/utils/async/guest/gbookings/gbookings";

const Booking = async () => {
  const data = await gbookings();
  return (
    <div className="dark:bg-slate-900  ">
      <GuestBookingInformationCard />
      <GuestBookingControlPanel data={data} />
    </div>
  );
};

export default Booking;
