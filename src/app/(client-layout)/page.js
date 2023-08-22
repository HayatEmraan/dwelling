import Cards from "@/components/home/cards/cards";
import CategoriesComponent from "@/components/home/categories/categories";
import Toggle from "@/components/home/toggle/Toggle";

export default function Home() {
  return (
    <main>
      <CategoriesComponent />
      <Toggle />
      <Cards />
    </main>
  );
}
