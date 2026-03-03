import Footer from "@/app/(user)/components/Footer";
import Navbar from "@/app/(user)/components/Navbar";
import Hero from "@/app/(user)/components/Hero";
import Tours from "@/app/(user)/components/Tours";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tours />
      <Footer />
    </>
  );
}
