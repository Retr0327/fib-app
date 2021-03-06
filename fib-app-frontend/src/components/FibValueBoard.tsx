import { CurrentIndexPropType } from "types";
import { Typography, Box } from "@mui/material";

function FibValueBoard({ currentIndex }: CurrentIndexPropType) {
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

      {currentIndex.map((value, index) => {
        return (
          <Typography key={index} variant="h5">
            For index {value.index}, I calculated {value.fib}
          </Typography>
        );
      })}
    </Box>
  );
}

export default FibValueBoard;
