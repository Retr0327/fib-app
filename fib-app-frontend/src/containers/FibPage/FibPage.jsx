import React from "react";
import { Box } from "@mui/material";
import FibPageController from "./FibPageController";

function FibPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        marginBottom: 20,
        marginRight: "auto",
        width: '100%',
        marginLeft: "auto",
      }}
    >
      <FibPageController />
    </Box>
  );
}

export default FibPage;
