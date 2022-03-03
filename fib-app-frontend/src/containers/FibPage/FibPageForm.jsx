import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { sendValues } from "../../service";
import { Button, Box, Grid } from "@mui/material";
import IndexBoard from "../../components/IndexBoard";
import FibValueBoard from "../../components/FibValueBoard";
import FormikController from "../../components/Form/FormikController";

function FibPageForm({ seenIndex, values }) {
  const initialValues = {
    inputIndex: "",
  };

  const validationSchema = Yup.object({
    inputIndex: Yup.string().required("必填！"),
  });

  const onSubmit = async (values, props) => {
    const { inputIndex } = values;
    const result = await sendValues({ index: inputIndex });

    if (result.status === "failed" && result.msg === "Index too high!") {
      return props.setErrors({ inputIndex: result.msg });
    }

    if (result.status === "success") {
      return window.location.reload(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
    >
      {(formik) => {
        return (
          <Form>
            <Grid
              container
              mt={2}
              width={300}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: 3,
                    width: "100%",
                  }}
                >
                  <FormikController
                    control="input"
                    name="inputIndex"
                    label="Fib index"
                  />
                  <Button sx={{ height: 55 }} type="submit" variant="contained">
                    新增
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={12}>
                <IndexBoard seenIndex={seenIndex} />
              </Grid>

              <Grid item xs={12} md={12} mt={2}>
                <FibValueBoard values={values} />
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FibPageForm;
