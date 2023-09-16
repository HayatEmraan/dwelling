import ChatboxComp from "@/components/chatbox/chatbox";
import FetchCards from "@/components/home/cards/fetchcards";
import CategoriesComponent from "@/components/home/categories/categories";

export default function Home() {
  return (
    <main>
      <CategoriesComponent />
      {/* <Toggle /> */}
      <div className="mt-4">
        <FetchCards />
      </div>
      <ChatboxComp />
    </main>
  );
}
