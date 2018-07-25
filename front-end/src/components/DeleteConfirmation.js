import React from "react";
import { Button } from "react-materialize";
import { MyContext } from "../containers/context.js";

const DeleteConfirmation = () => (
  <MyContext.Consumer>
    {({ handleClose, handleAccountDelete }) => (
      <div className="wrapper delete">
        <strong>Click confirm to delete your account</strong>
        <Button waves="light" className="red" onClick={handleAccountDelete}>
          Confirm
        </Button>
        <Button className="btn" onClick={handleClose}>
          Cancel
        </Button>
      </div>
    )}
  </MyContext.Consumer>
);

export default DeleteConfirmation;
