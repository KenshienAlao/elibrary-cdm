import { Structure } from "@/components/structure";
import { Header } from "@/components/profile/profile-header";
import { Form } from "@/components/profile/profile-form";

export default function ProfilePage() {
  return (
    <Structure>
      <div className="mx-auto w-full max-w-2xl px-6 py-12 lg:px-8">
        <Header />
        <Form />
      </div>
    </Structure>
  );
}
