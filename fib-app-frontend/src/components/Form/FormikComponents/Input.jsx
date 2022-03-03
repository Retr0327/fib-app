import React from "react";
import { Field } from "formik";
import { FormControl, InputLabel, TextField } from "@mui/material";

function Input(props) {
  const { label, name, customErrorMsg, readOnly, sx, ...rest } = props;

  const hasNestedName = name.includes(".");
  const nestedName = name.split(".");

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={name} id={name} />
      <Field>
        {({ form, meta }) => {
          const hasTouched = hasNestedName
            ? form.touched[nestedName[0]]?.[nestedName[1]]
            : form.touched[name];

          const hasError = hasNestedName
            ? form.errors[nestedName[0]]?.[nestedName[1]]
            : form.errors[name];

          return (
            <TextField
              label={label}
              id={name}
              onChange={form.handleChange}
              onReset={form.handleReset}
              onBlur={form.handleBlur}
              error={hasTouched && !!hasError}
              helperText={(hasTouched && hasError) || " "}
              value={meta.value[name]}
              sx={sx}
              inputProps={{
                name,
                id: name,
                readOnly: readOnly,
              }}
              {...rest}
            />
          );
        }}
      </Field>
    </FormControl>
  );
}

export default Input;
