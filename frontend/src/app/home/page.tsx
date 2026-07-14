import { WelcomeSection } from "@/components/home/welcome-section";
import { Structure } from "@/components/structure";
import { Background } from "@/components/home/background";
import SearchForm from "@/components/search/search-form";

export default function Home() {
  return (
    <Structure>
      <main className="relative z-0 flex flex-1 flex-col items-center justify-center px-6 pb-24 md:pb-0">
        <Background />
        <div className="w-full max-w-2xl space-y-10">
          <WelcomeSection />
          <SearchForm />
        </div>
      </main>
    </Structure>
  );
}
