import React, { useEffect, useState, useContext } from "react";
import { loginApi } from "../../services/UserService";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { loginUser } from "../../services/LoginService";

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
    let res = await loginUser(email.trim(), password);
    console.log("check login user ", res)
    if (res && res.data && res.data.accessToken) {
      loginContext(email, res.data.accessToken);
      navigate("/admin/home");
    } else {
      if (res && res.status === 500) {
        toast.error("Email/Password không chính xác");
      }
    }
    setLoadingApi(false);
  };

  const handleGoBack = () => {
    navigate("/starter");
  };

  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title"> Đăng nhập</div>
        <div className="text">Email or Username</div>
        <input
          type="text"
          placeholder="Email or username ..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword == true ? "text" : "password"}
            placeholder="Password ..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <i
            className={
              isShowPassword == true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
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
          &nbsp; Đăng nhập
        </button>
        <div className="back">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          <span onClick={() => handleGoBack()}> &nbsp;Quay về</span>
        </div>
      </div>
    </>
  );
};

export default Login;
