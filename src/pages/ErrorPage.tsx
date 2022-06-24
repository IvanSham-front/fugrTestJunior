import React from "react";
import { Alert } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <div className="container App__central">
      <Alert variant="danger">
        <Alert.Heading>Oh no! Something went wrong!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    </div>
    
  )
}

export default ErrorPage