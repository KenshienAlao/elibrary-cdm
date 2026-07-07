import { WelcomeSection } from "@/components/home/welcome-section";
import { Structure } from "@/components/structure";
import Search from "../search/page";
import { Background } from "@/components/home/background";

export default function Home() {
  return (
    <Structure>
      <main className="relative z-0 flex flex-1 flex-col justify-center px-6 pb-24 lg:px-12 md:pb-0">
        <Background />
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
            <WelcomeSection />
            <Search />
          </div>
        </div>
      </main>
    </Structure>
  );
}
