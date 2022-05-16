import { FibPagePropsType } from "types";
import { Typography, Box } from "@mui/material";

function IndexBoard({ allValues }: Partial<FibPagePropsType>) {
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
        Index I've seen:
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
        {allValues!.map((value, index) => {
          return (
            <Typography key={index} variant="h5">
              {value.fib_number}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}
export default IndexBoard;
