import React, { useState } from "react";
import Name from "./Name";
import { Typography, Button, Box, Card } from "@mui/material";
import cloudyImage from "./img/cloudy.jpg";
import rainyImage from "./img/rainy.jpg";
import sunnyImage from "./img/sunny.jpg";

function Greetings({ toNamePage }) {
  const [playId, setPlayId] = useState(null);

  const logMood = async (mood) => {
    const response = await fetch("http://127.0.0.1:5000/log_mood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mood: mood }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Mood logged successfully", data);
      setPlayId(data.id);
      toNamePage(data.id);
    }
  };

  return (
    <Box>
      <Typography sx={{ fontSize: 50, textAlign: "center", mt: 5 }}>
        Welcome to Climate-Time
      </Typography>
      <Typography sx={{ fontSize: 50, textAlign: "center", mt: 1 }}>
        You Pre-Trekkers journey is about to begin...
      </Typography>

      <Card
        sx={{
          marginTop: "3rem",
          marginLeft: "30rem",
          height: 500,
          maxWidth: 600,
          boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginBottom: "20px",
            mt: 10,
          }}
        >
          <Typography>Hello :) How are you doing today?</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          sx={{ mt: 10, gap: 10 }}
        >
          <Button onClick={() => logMood("sunny")}>
            <img
              src={sunnyImage}
              alt="Sunny Weather"
              style={{ width: 100, height: 100 }}
            />
          </Button>
          <Button onClick={() => logMood("cloudy")}>
            <img
              src={cloudyImage}
              alt="Cloudy Weather"
              style={{ width: 100, height: 100 }}
            />
          </Button>
          <Button onClick={() => logMood("rainy")}>
            <img
              src={rainyImage}
              alt="Rainy Weather"
              style={{ width: 100, height: 100 }}
            />
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default Greetings;
