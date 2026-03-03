import Footer from "@/app/(user)/components/Footer";
import Navbar from "@/app/(user)/components/Navbar";
import Hero from "@/app/(user)/components/Hero";
import Tours from "@/app/(user)/components/Tours";
import AboutUs from "@/app/(user)/components/AboutUs";
import WhyChooseUs from "@/app/(user)/components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tours />
      <AboutUs />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
