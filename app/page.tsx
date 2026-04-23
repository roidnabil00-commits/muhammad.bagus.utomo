import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import QuoteBanner from "./components/QuoteBanner";
import Mentoring from "./sections/Mentoring";
import Testimonials from "./sections/Testimonials";
import Kerjasama from "./sections/Kerjasama";
import Kontak from "./sections/Kontak";
import Footer from "./components/Footer";
import Social from "./sections/Social";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <QuoteBanner />
        <Journey />
        <div className="section-divider" />
        <Mentoring />
        <Testimonials />
        <div className="section-divider" />
        <Kerjasama />
        <div className="section-divider" />
        <Kontak />
        <div className="section-divider" />
        <Social />
      </main>
      <Footer />
    </>
  );
}
