import React from 'react'
import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <div className="not-found col-12 col-sm-6">
        <Alert variant="success" dismissible>
          <Alert.Heading>Oh page not found! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </div>
    </>
  );
}

export default NotFound