import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Input,
  Typography,
  Box,
  Fade,
} from "@mui/material";

function ClimateTypes({ toLearningSum }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [name, setName] = useState("");
  const [stage, setStage] = useState(1); // New state to control the display sequence

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });

    // Automatically advance stages
    const timer = setInterval(() => {
      setStage((prevStage) => (prevStage < 4 ? prevStage + 1 : prevStage));
    }, 3000); // Change 3000 (3 seconds) to your desired time for each stage

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, []);

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
          onClick={toLearningSum}
          variant="contained" // Use the theme's contained button style
          sx={{ mt: 2 }} // Add margin top for spacing from the last text
        >
          &#8594; Learning Summary
        </Button>
      </Card>
    </Box>
  );
}

export default ClimateTypes;
