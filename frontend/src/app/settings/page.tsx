import { Structure } from "@/components/structure";
import { Header } from "@/components/settings/settings-header";
import { Account } from "@/components/settings/settings-account";
import { Preference } from "@/components/settings/settings-preference";
import { Session } from "@/components/settings/settings-session";

export default function Settings() {
  return (
    <Structure>
      <div className="mx-auto w-full max-w-2xl px-6 py-12 lg:px-8">
        <Header />
        <div className="space-y-10">
          <Account />
          <Preference />
          <Session />
        </div>
      </div>
    </Structure>
  );
}
