import React from "react";
import Banner from "../components/Banner";
import Dashboard from "../components/Dashboard";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import BackTop from "../components/backtotop";
import Logos from "../components/Logos";

export default function Home() {
  return (
    <div className="page home">
      {/* <Dashboard /> */}
      <Banner />
      <Logos />
      <Feature />
      <Roadmap />
      <Team />
      <BackTop />
      <Faq />
    </div>
  );
}
