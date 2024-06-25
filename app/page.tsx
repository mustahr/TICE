import Home from "@/app/components/ui/home";
const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
import Definition from "@/app/components/ui/definition";
import Canva from "./components/ui/canva";
import Scratch from "./components/ui/scratch";
import { Footer } from "./components/ui/footer";

export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full min-h-screen z-10 px-2 md:p-20">
      <Home />
      <Definition />
      <Canva />
      <Scratch />
      <Footer />
    </main>
  );
}
