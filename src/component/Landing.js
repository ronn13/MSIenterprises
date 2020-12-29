import React from "react";

import Features from "./Features";
import Client from "./Client";
import InstallationSection from "./InstallationSection";
import Slider from "./Slider";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";

function Landing() {
  return (
    <>
      <Navigationbar />
      <Slider />
      <Features />
      <InstallationSection />
      <Client />
      <Footer />
    </>
  );
}

export default Landing;
