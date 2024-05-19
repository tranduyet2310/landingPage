import React, { useEffect } from "react";
import Header from "./Header";
import TableUsers from "./TableUsers";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Home";
import { Outlet, Route, Routes } from "react-router-dom";
import { useContext } from "react";
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
