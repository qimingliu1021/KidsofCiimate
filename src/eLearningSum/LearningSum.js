import React from "react";
import { Typography, Button, Card, Box } from "@mui/material";

function LearningSum({ toTheEnd }) {
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
          Weathers in our daily life
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }}>
          Common Extreme Weathers
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }}>
          12 kinds of Climates and their global distribution{" "}
        </Typography>
        {/* <Typography sx={{ textAlign: "center", mb: 2 }}>
          Climates Global
        </Typography> */}
        <Button
          onClick={toTheEnd}
          variant="contained" // Use the theme's contained button style
          sx={{ mt: 2 }} // Add margin top for spacing from the last text
        >
          Ready for a time zone Climate travel?
        </Button>
      </Card>
    </Box>
  );
}

export default LearningSum;
