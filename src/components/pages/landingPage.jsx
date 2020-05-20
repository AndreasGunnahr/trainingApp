import React, { useEffect } from "react";

// Import components
import MainLayout from "../layouts/mainLayout";
import HeroSection from "../landing/heroSection";

const LandingPage = () => {
  // const getUsers = async () => {
  //   let response = await fetch("/api/todos");
  //   let data = await response.json();
  //   return data;
  // };

  // useEffect(() => {
  //   console.log(getUsers());
  // }, []);
  return (
    <MainLayout maxWidth={"lg"}>
      <HeroSection />
    </MainLayout>
  );
};

export default LandingPage;
