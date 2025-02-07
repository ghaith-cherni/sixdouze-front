import * as React from "react"; 
import Navbar from "@/components/FrontPages/Common/Navbar";
import HeroBanner from "@/components/FrontPages/Home/HeroBanner";
import ContactUs from "@/components/FrontPages/Common/ContactUs";
import Footer from "@/components/FrontPages/Common/Footer";

export default function Home() {
  return (
    <>
      <div className="fp-wrapper">
        <Navbar />

        <HeroBanner />

        <ContactUs />

        <Footer />
      </div>
    </>
  );
}
