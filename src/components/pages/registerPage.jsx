import React from "react";

// Import components
import RegisterForm from "../forms/registerForm";
import MainLayout from "../layouts/mainLayout";

const RegisterPage = () => {
  return (
    <MainLayout maxWidth={"md"}>
      <RegisterForm />
    </MainLayout>
  );
};

export default RegisterPage;
