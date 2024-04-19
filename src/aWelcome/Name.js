import { Box, Card, Typography, Input } from "@mui/material";
import React, { useState } from "react";

function Name({ toHelloName, playerId }) {
  const [name, setName] = useState("");

  const logName = async (nickname) => {
    if (!playerId) {
      console.error("Player ID missing");
      return;
    }
    const response = await fetch("http://127.0.0.1:5000/log_name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname, id: playerId }),
    });
    if (response.ok) {
      console.log("Name logged successfully");
      toHelloName();
    } else {
      const responseData = await response.json();
      console.error("Failed to log name:", responseData.message);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      console.log("enter");
      toHelloName(name);
      logName(name);
    }
  };

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
        <Typography sx={{ mb: " 0.5rem" }}>What's your name?</Typography>
        <Input
          color="primary"
          value={name}
          onChange={handleNameChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your name"
          fullWidth
        />
      </Box>
    </Card>
  );
}

export default Name;
