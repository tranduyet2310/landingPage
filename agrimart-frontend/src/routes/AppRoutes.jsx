import { Route, Routes } from "react-router-dom";
import React from "react";
import PublicPage from "../components/PublicPage";
import AdminPage from "../components/admin/AdminPage";
import Home from "../components/admin/Home";
import TableUsers from "../components/admin/account/TableUsers";
import Login from "../components/admin/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";
import Starter from "../components/admin/Starter";
import TableSupplier from "../components/admin/account/TableSupplier";
import TableApproval from "../components/admin/account/TableApproval";
import TableCategory from "../components/admin/category/TableCategory";
import TableProduct from "../components/admin/product/TableProduct";
import TableOrder from "../components/admin/order/TableOrder";
import TableGarden from "../components/admin/garden/TableGarden";
import TableCooperation from "../components/admin/order/TableCooperation";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/starter" element={<Starter />} />

        <Route path="/admin" element={<AdminPage />}>
          <Route path="home" element={<Home />} />
          <Route
            path="users"
            element={
              <PrivateRoute>
                <TableUsers />
              </PrivateRoute>
            }
          />
          <Route
            path="suppliers"
            element={
              <PrivateRoute>
                <TableSupplier />
              </PrivateRoute>
            }
          />
          <Route
            path="approval"
            element={
              <PrivateRoute>
                <TableApproval />
              </PrivateRoute>
            }
          />
          <Route
            path="categories"
            element={
              <PrivateRoute>
                <TableCategory />
              </PrivateRoute>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRoute>
                <TableProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="orders"
            element={
              <PrivateRoute>
                <TableOrder />
              </PrivateRoute>
            }
          />
          <Route
            path="cooperation"
            element={
              <PrivateRoute>
                <TableCooperation />
              </PrivateRoute>
            }
          />
          <Route
            path="garden"
            element={
              <PrivateRoute>
                <TableGarden />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
