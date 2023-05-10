import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";


const AdminRouter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};


export default AdminRouter;
