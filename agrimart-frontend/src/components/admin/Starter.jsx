import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Starter = () => {
  const navigate = useNavigate();

  const { user, loginContext } = useContext(UserContext);

  console.log("starter ", user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(localStorage.getItem("email"), localStorage.getItem("token"));
    }
  }, []);

  const goToLoginPage = () => {
    if (user && user.auth === true) {
      navigate("/admin/home");
    } else {
      navigate("/admin/login");
    }
  };

  return (
    <>
      <div className="col-12">
        <div className="fullscreen-image d-flex flex-column align-items-center justify-content-cente">
          <div className="text-overlay">
            <b>Chào mừng tới trang quản trị - AgriMart</b>
          </div>
          <button
            className="custom-button mt-3"
            onClick={() => goToLoginPage()}
          >
            Bắt đầu
          </button>
        </div>
      </div>
    </>
  );
};

export default Starter;
