import React, { useEffect } from "react";

// Import components
import MainLayout from "../layouts/mainLayout";
import HeroSection from "../landing/heroSection";

const LandingPage = () => {
  return (
    <MainLayout maxWidth={"lg"}>
      <HeroSection />
    </MainLayout>
  );
};

export default LandingPage;
