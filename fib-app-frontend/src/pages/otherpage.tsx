import Link from "next/link";
import { NextPage } from "next/types";
import { Box, Typography, Button } from "@mui/material";

const OtherPage: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "2rem",
          maxWidth: "60%",
          minWidth: "60%",
          marginTop: "2rem",
          marginBottom: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          mb={4}
        >
          <Typography variant="h5" mb={2}>
            In some other page{" "}
          </Typography>

          <Link href="/" passHref>
            <Button component="a" variant="contained" size="large">
              Home
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherPage;
