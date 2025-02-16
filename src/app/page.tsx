import * as React from "react"; 
import Navbar from "@/components/FrontPages/Common/Navbar";
import HeroBanner from "@/components/FrontPages/Home/HeroBanner";
import ContactUs from "@/components/FrontPages/Common/ContactUs";
import Footer from "@/components/FrontPages/Common/Footer";
import TopRated from "@/components/FrontPages/Common/TopRated";
import ForBusiness from "@/components/FrontPages/Common/ForBusiness";
//import Cta from "@/components/FrontPages/Common/Cta";

export default function Home() {
  return (
    <>
      <div className="fp-wrapper">
        <Navbar />

        <HeroBanner />

        <TopRated />

 
        <ForBusiness />

       {/* <Cta />*/}

        <ContactUs />
        
        <Footer />
      </div>
    </>
  );
}
