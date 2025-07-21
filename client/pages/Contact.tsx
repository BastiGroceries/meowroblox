import { Header } from "../components/Header";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
