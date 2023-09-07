import SearchBeds from "@/components/SearchScheduler/SearchBeds";
import DetailsFacilities from "@/components/details/DetailsFacilities/DetailsFacilities";
import Header from "@/components/details/Header/Header";
import HouseRules from "@/components/details/HouseRules/HouseRules";
import ImagesCom from "@/components/details/ImagesCom/ImagesCom";
import MostPopularFacilities from "@/components/details/MostPopularFacilities/MostPopularFacilities";
import ReviewsComp from "@/components/details/Review/review";
import ReviewsModal from "@/components/details/Review/reviewmodal";
import Reviews from "@/components/details/Reviews/Reviews";
import SingleRoomDetails from "@/components/details/SingleRoomDetails/SingleRoomDetails";
import DetailsMapIndex from "@/components/details/detailMap";

const RoomDetails = async ({ params }) => {
  const { slug } = params;
  const res = await fetch(
    `https://dwelling-bright-server.vercel.app/api/v1/getdetails/${slug}`, {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div className="max-w-6xl lg:mx-auto px-5">
      {/* Header Section */}
      <Header data={data?.data}></Header>
      {/* Grid  Images */}
      <ImagesCom data={data?.data}></ImagesCom>
      {/* Details Sections */}
      <SingleRoomDetails data={data?.data}></SingleRoomDetails>
      {/* Facilities */}
      <div className="my-5">
        <div className=" my-5">
          <h2 className="font-bold text-xl">Facilities of {data?.data.name}</h2>
        </div>
        {/* Most Popular */}
        <MostPopularFacilities data={data?.data}></MostPopularFacilities>
        {/* details Facilites */}
        <DetailsFacilities data={data?.data}></DetailsFacilities>
        {/* House Rules */}
        <HouseRules data={data?.data}></HouseRules>
      </div>

      {/* reviews */}
      <Reviews
        reviews={<ReviewsComp />}
        reviewsModal={<ReviewsModal />}
        reviewsLength={data?.data?.reviews?.length}
      />

      {/* details map  */}
      <DetailsMapIndex />
      <section></section>
    </div>
  );
};

export default RoomDetails;
