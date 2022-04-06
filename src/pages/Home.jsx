import React from "react";
import Banner from "../components/Banner";
import Roadmap from "../components/Roadmap";
import BackTop from "../components/backtotop";
import Logos from "../components/Logos";
import TopContent from "../components/TopContent";
import CenterContent from "../components/CenterContent";
import BottomContent from "../components/BottomContent";
import Testimonials from "../components/Testimonials";
import HowToBuy from "../components/HowToBuy";
import FooterContent from "../components/FooterContent";

export default function Home() {
  return (
    <div className="page home">
      <Banner />
      <Logos />
      <TopContent />
      <CenterContent />
      <BottomContent />
      <Testimonials />
      <HowToBuy />
      <Roadmap />
      <BackTop />
      <FooterContent />
    </div>
  );
}
