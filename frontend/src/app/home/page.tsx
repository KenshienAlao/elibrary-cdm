import SearchForm from "@/components/home/search-form";
import { WelcomeSection } from "@/components/home/welcome-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-linear-to-r from-primary/10 to-accent/10">
        <WelcomeSection />
      </section>

      <div className="mx-auto max-w-4xl bg-background p-6 text-foreground min-h-screen">
        <SearchForm />
      </div>
    </div>
  );
}
