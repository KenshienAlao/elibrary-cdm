import { Structure } from "@/components/structure";
import { Header } from "@/components/bookmark/bookmark-header";
import { Body } from "@/components/bookmark/bookmark-body";

export default function BookmarkPage() {
  return (
    <Structure>
      <div className="mx-auto w-full max-w-4xl px-4 py-10 md:py-16">
        <Header />
        <Body />
      </div>
    </Structure>
  );
}
