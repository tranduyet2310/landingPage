import React, { useEffect, useContext } from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const AdminPage = () => {

  const { user, loginContext } = useContext(UserContext);

  console.log("user context", user)

  useEffect(() => {
    if(localStorage.getItem("token")){
      loginContext(localStorage.getItem("email"), localStorage.getItem("token"));
    }
  }, [])

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <Outlet />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AdminPage;
