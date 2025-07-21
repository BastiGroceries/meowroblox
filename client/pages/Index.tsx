import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { ItemsShowcase } from "../components/ItemsShowcase";
import { GamesTemplates } from "../components/GamesTemplates";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <ItemsShowcase />
        <GamesTemplates />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
