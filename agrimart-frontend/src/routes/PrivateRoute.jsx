import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Alert } from "react-bootstrap";

const PrivateRoute = ({children}) => {
    const { user } = useContext(UserContext);

    if (user && !user.auth) {
      return (
        <>
          <Alert variant="danger" dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Bạn cần có quyền ADMIN để thực hiện chức năng này. Vui lòng đăng nhập vào hệ thống!!
            </p>
          </Alert>
        </>
      );
    }
    return children;
};

export default PrivateRoute;
