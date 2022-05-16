import { Box } from "@mui/material";
import FibPageForm from "./FibPageForm";
import { FibPagePropsType } from "types";

const FibPage = ({ allValues, currentIndex }: FibPagePropsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        marginBottom: 20,
        marginRight: "auto",
        width: "100%",
        marginLeft: "auto",
      }}
    >
      <FibPageForm allValues={allValues} currentIndex={currentIndex} />
    </Box>
  );
};

export default FibPage;
