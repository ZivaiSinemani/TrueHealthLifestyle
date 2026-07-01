import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Agenda from "@/components/Agenda";
import WhoFor from "@/components/WhoFor";
import WhyBook from "@/components/WhyBook";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import StillThinking from "@/components/StillThinking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Agenda />
        <WhoFor />
        <WhyBook />
        <FAQ />
        <Booking />
        <StillThinking />
      </main>
      <Footer />
    </>
  );
}
