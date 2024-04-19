import { Typography, Box, Card, Button } from "@mui/material";
import React from "react";

function HelloName({ name, toWeatherLearning }) {
  return (
    <Card
      sx={{
        marginTop: "10rem",
        marginLeft: "30rem",
        transform: "transalte(-50%, -50%)",
        height: 500,
        maxWidth: 600,
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        boarderRadius: "16px",
        padding: "20px",
      }}
    >
      <Box>
        <Typography
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Correctly center the Typography
            textAlign: "center",
          }}
        >
          Hello {name}! Shall we begin?
        </Typography>
        <Button
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Correctly center the Typography
            textAlign: "center",
          }}
          onClick={toWeatherLearning}
        >
          Let's Begin!{" "}
        </Button>
      </Box>
    </Card>
  );
}

export default HelloName;
