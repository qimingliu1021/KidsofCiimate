import React from "react";
import { Box, Card, Typography, Button } from "@mui/material";

function TheEnd({}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Card
        sx={{
          width: 700, // Set your desired width
          boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers the content inside the card
          gap: 2, // Adds space between items inside the card
        }}
      >
        <Typography sx={{ textAlign: "center", mb: 2 }}>
          Thank you for journey with me. Here is your learning recipe:
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }}>
          The Final Game - Climate Time Trekkers - TO BE CONTINUED
        </Typography>

        {/* <Typography sx={{ textAlign: "center", mb: 2 }}>
          Climates Global
        </Typography> */}
        <Button
          // onClick={}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Ready for a time zone Climate travel?
        </Button>
      </Card>
    </Box>
  );
}

export default TheEnd;
