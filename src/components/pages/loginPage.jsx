import React from "react";

// Import components
import LoginForm from "../forms/loginForm";
import MainLayout from "../layouts/mainLayout";

const LoginPage = () => {
  return (
    <MainLayout maxWidth={"md"}>
      <LoginForm />
    </MainLayout>
  );
};

export default LoginPage;
