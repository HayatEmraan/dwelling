import Cards from "@/components/cards/cards";
import CategoriesComponent from "@/components/categories/categories";
import Toggle from "@/components/toggle/Toggle";

export default function Home() {
  return (
    <main>
      <CategoriesComponent />
      <Toggle />
      <Cards />
    </main>
  );
}
