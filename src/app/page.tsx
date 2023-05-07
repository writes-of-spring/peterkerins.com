import Section from "@/components/Section";
import Banner from "@/components/Banner";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto w-full max-w-7xl px-4 sm:px-0">
        <Section title="Services">
          <Services />
        </Section>
        <Section title="Contact">
          <ContactForm />
        </Section>
      </div>
    </div>
  );
}

export const metadata = {
  title: {
    absolute: "Peter Kerins | Web Developer",
  },
};
