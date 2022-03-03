import React from "react";
import Input from "./FormikComponents/Input";

function FormikController(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
}

export default FormikController;
