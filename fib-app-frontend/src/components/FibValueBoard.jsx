import React from "react";
import { Typography, Box } from "@mui/material";

function FibValueBoard({ values }) {
  const filteredArray = values.filter((value, index) => {
    return index % 2 !== 0;
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" mb={2} sx={{ fontWeight: "bold" }}>
        Calculated Values:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: 3,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredArray.map((value, index) => {
          return (
            <Typography key={index} variant="h5">
              {value}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}
export default FibValueBoard;
