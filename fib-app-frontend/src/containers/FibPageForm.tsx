import * as Yup from "yup";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { FibPagePropsType, FormValueType } from "types";
import FormikController from "@components/Form/FormikController";

function FibPageForm({ allValues, currentIndex }: FibPagePropsType) {
  const initialValues: FormValueType = {
    inputIndex: "",
  };

  const validationSchema = Yup.object({
    inputIndex: Yup.string().required("必填！"),
  });

  const onSubmit = async (
    values: FormValueType,
    actions: FormikHelpers<FormValueType>
  ) => {
    const { inputIndex } = values;
    console.log(inputIndex);
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
                  control="text-input"
                  name="inputIndex"
                  label="Fib index"
                />
                <Button sx={{ height: 55 }} type="submit" variant="contained">
                  新增
                </Button>
              </Box>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FibPageForm;
