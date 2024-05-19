import React, { useEffect, useState } from "react";
import { loginApi } from "../../services/UserService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const navigate = useNavigate();

  const { loginContext } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [loadingApi, setLoadingApi] = useState(false);

  //   useEffect(() => {
  //     let token = localStorage.getItem("token");
  //     if (token) {
  //       navigate("/admin/home");
  //     }
  //   }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Missing email/passowrd");
      return;
    }
    setLoadingApi(true);
    // eve.holt@reqres.in
    let res = await loginApi(email.trim(), password);
    if (res && res.data.token) {
      loginContext(email, res.data.token);
      navigate("/admin/home");
    } else {
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoadingApi(false);
  };

  const handleGoBack = () => {
    navigate("/admin/home");
  };

  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title"> Log in</div>
        <div className="text">Email or Username</div>
        <input
          type="text"
          placeholder="Email or username ..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword == true ? "password" : "text"}
            placeholder="Password ..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <i
            className={
              isShowPassword == true
                ? "fa-solid fa-eye-slash"
                : "fa-solid fa-eye"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>

        <button
          className={email && password ? "active" : ""}
          disabled={email && password && !loadingApi ? false : true}
          onClick={() => handleLogin()}
        >
          {loadingApi && <i className="fa-solid fa-sync fa-spin"></i>}
          &nbsp; Login
        </button>
        <div className="back">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          <span onClick={() => handleGoBack()}> &nbsp;Go back</span>
        </div>
      </div>
    </>
  );
};

export default Login;
