import React, { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoApp from "../../assets/react.svg";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const Header = (props) => {
  const { logout, user } = useContext(UserContext);

  const [hideHeader, setHideHeader] = useState(false);

  // useEffect(() => {
  //   if (window.location.pathname === "/admin/login") {
  //     setHideHeader(true);
  //   }
  // }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/admin/home");
    toast.success("Log out success");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/admin/home">
            <img
              src={logoApp}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span>AgriMart</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {((user && user.auth) ||
              window.location.pathname === "/admin/home") && (
              <>
                <Nav className="me-auto" activeKey={location.pathname}>
                  <NavLink className="nav-link" to="/admin/categories">
                    Quản lý danh mục
                  </NavLink>
                  <NavDropdown
                    title="Quản lý tài khoản"
                    id="basic-nav-dropdown"
                  >
                    <NavLink className="dropdown-item" to="/admin/users">
                      Tài khoản người dùng
                    </NavLink>
                    <NavLink className="dropdown-item" to="/admin/suppliers">
                      Tài khoản bán hàng
                    </NavLink>
                    <NavLink className="dropdown-item" to="/admin/approval">
                      Phê duyệt
                    </NavLink>
                  </NavDropdown>
                  <NavLink className="nav-link" to="/admin/products">
                    Quản lý sản phẩm
                  </NavLink>
                  <NavLink className="nav-link" to="/admin/orders">
                    Quản lý đơn hàng
                  </NavLink>
                  <NavLink className="nav-link" to="/admin/garden">
                    Quản lý vườn
                  </NavLink>
                </Nav>

                <Nav>
                  {user && user.email && (
                    <span className="nav-link">Chào {user.email}</span>
                  )}
                  <NavDropdown title="Cài đặt" id="basic-nav-dropdown">
                    {user && user.auth === true ? (
                      <NavDropdown.Item onClick={() => handleLogout()}>
                        Đăng xuất
                      </NavDropdown.Item>
                    ) : (
                      <NavLink className="dropdown-item" to="/admin/login">
                        Đăng nhập
                      </NavLink>
                    )}
                  </NavDropdown>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
