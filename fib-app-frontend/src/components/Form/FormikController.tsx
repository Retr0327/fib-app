import { ControllerProps } from "types";
import Input from "./FormikComponents/Input";

function FormikController(props: ControllerProps) {
  const { control, ...rest } = props;

  switch (control) {
    case "text-input":
      return <Input {...rest} />;
    default:
      return null;
  }
}

export default FormikController;