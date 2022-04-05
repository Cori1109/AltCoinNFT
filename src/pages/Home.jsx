import React from "react";
import About from "../components/About";
import Dashboard from "../components/Dashboard";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import BackTop from "../components/backtotop";

export default function Home() {
  return (
    <div className="page home">
      <Dashboard />
      <About />
      <Feature />
      <Roadmap />
      <Team />
      <BackTop />
      <Faq />
    </div>
  );
}
