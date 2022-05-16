import { ControlledProps } from "types";
import useCustomFormik from "src/hooks/useCustomFormik";
import { FormControl, InputLabel, TextField } from "@mui/material";

function Input(props: ControlledProps) {
  const { label, name } = props;
  const [formik, hasError] = useCustomFormik(name);

  return (
    <TextField
      label={label}
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={!!hasError}
      helperText={hasError || " "}
    />
  );
}

export default Input;
