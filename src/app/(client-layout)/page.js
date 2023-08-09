import Cards from "@/components/cards/cards";
import Toggle from "@/components/toggle/Toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-4 space-y-4">
      <Toggle></Toggle>
      <Cards />
    </main>
  );
}
