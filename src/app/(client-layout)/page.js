import FetchCards from "@/components/home/cards/fetchcards";
import CategoriesComponent from "@/components/home/categories/categories";
import Toggle from "@/components/home/toggle/Toggle";

export default function Home() {
  return (
    <main>
      <CategoriesComponent />
      <Toggle />
      <FetchCards />
    </main>
  );
}
