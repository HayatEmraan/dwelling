import dynamic from "next/dynamic";
const DetailsMapIndex = dynamic(() => import("./DetailsMap"), {
  ssr: false,
});
export default DetailsMapIndex;
