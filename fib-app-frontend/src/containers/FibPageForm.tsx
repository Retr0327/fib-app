import * as Yup from "yup";
import { Grid, Box, Button } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { FibPagePropsType, FormValueType } from "types";
import FormikController from "@components/Form/FormikController";
import { IndexBoard } from "@components/index";


//  currentIndex [ { index: '4', fib: '3' }, { index: '6', fib: '8' } ]

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
                    control="text-input"
                    name="inputIndex"
                    label="Fib index"
                  />
                  <Button sx={{ height: 55 }} type="submit" variant="contained">
                    新增
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12} md={12}>
                <IndexBoard allValues={allValues} />
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FibPageForm;
