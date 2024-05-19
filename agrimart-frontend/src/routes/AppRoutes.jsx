import { Route, Routes } from "react-router-dom";
import React from "react";
import PublicPage from "../components/PublicPage";
import AdminPage from "../components/admin/AdminPage";
import ListEmployeeComponent from "../components/admin/ListEmployeeComponent";
import Home from "../components/admin/Home";
import TableUsers from "../components/admin/TableUsers";
import Login from "../components/admin/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicPage />} />

        <Route path="/admin" element={<AdminPage />}>
          <Route path="home" element={<Home />} />

          <Route
            path="users"
            element={
              <PrivateRoute >
                <TableUsers />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/list" element={<ListEmployeeComponent />} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
