import React from "react";
import { Typography, Button, Card, Box } from "@mui/material";

function ClimateLearning({ toClimateTypes }) {
  // const fadeIn =
  //   "@keyframes fadeInAnimation { from { opacity: 1; } to { opacity: 0; } }";

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Card
        sx={{
          width: 700,
          boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            mb: 2,
            // animation: `${fadeIn} 2s ease forwards`,
            // opacity: 0,
            // animationDelay: "0.5s",
          }}
        >
          Weather: a short term description of the air in an area measured by
          temperature, precipitation, humidity, wind, and other factors.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mb: 2,
            // animation: `${fadeIn} 2s ease forwards`,
            // opacity: 0,
            // animationDelay: "1.5s",
          }}
        >
          Climate: conditions of the atmosphere at a particular location over a
          long period of time.
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }}>
          There are 12 different types of climate found on Earth.
        </Typography>
        <Button
          onClick={toClimateTypes}
          variant="contained" // Use the theme's contained button style
          sx={{ mt: 2 }} // Add margin top for spacing from the last text
        >
          &#8594; All the climates
        </Button>
      </Card>
    </Box>
  );
}

export default ClimateLearning;
