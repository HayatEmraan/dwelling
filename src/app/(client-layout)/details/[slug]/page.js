import DetailsMapMain from "@/components/details/detailMap";
import DetailsMap from "@/components/details/detailMap/DetailsMap";
import DetailsFacilities from "@/components/details/DetailsFacilities/DetailsFacilities";
import Header from "@/components/details/Header/Header";
import HouseRules from "@/components/details/HouseRules/HouseRules";
import ImagesCom from "@/components/details/ImagesCom/ImagesCom";
import MostPopularFacilities from "@/components/details/MostPopularFacilities/MostPopularFacilities";
import SingleRoomDetails from "@/components/details/SingleRoomDetails/SingleRoomDetails";

const RoomDetails = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/HayatEmraan/dwelling/hayat/public/fake.json"
  );
  const data = await res.json();

  return (
    <div className="max-w-6xl lg:mx-auto px-5">
      {/* Header Section */}
      <Header data={data}></Header>
      {/* Grid  Images */}
      <ImagesCom></ImagesCom>
      {/* Details Sections */}
      <SingleRoomDetails data={data}></SingleRoomDetails>
      {/* Facilities */}
      <div className="my-5">
        <div className=" my-5">
          <h2 className="font-bold text-xl">Facilities of Saint Martin Ltd.</h2>
        </div>
        {/* Most Popular */}
        <MostPopularFacilities data={data}></MostPopularFacilities>
        {/* details Facilites */}
        <DetailsFacilities data={data}></DetailsFacilities>
        {/* House Rules */}
        <HouseRules data={data}></HouseRules>
      </div>
      {/* details map  */}
      {/* <DetailsMap /> */}
      <DetailsMapMain></DetailsMapMain>

      {/* reviews section  */}
      <section></section>
    </div>
  );
};

export default RoomDetails;
