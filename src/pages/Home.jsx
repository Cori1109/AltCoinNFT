import React from "react";
import Banner from "../components/Banner";
import Dashboard from "../components/Dashboard";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
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
      {/* <Dashboard /> */}
      <Banner />
      <Logos />
      <TopContent />
      <CenterContent />
      <BottomContent />
      <Testimonials />
      <HowToBuy />
      <Roadmap />
      {/* <Team /> */}
      <BackTop />
      {/* <Faq /> */}
      <FooterContent />
    </div>
  );
}
