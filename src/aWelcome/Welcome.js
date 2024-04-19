import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, createTheme } from "@mui/material";
import { Input } from "@mui/material";
import Typography from "@mui/material/Typography";

function Welcome({ startGame }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <Card
      sx={{
        marginTop: "10rem",
        marginLeft: "30rem",
        transform: "translate(-50%, -50%)",
        height: 500,
        maxWidth: 600,
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        boarderRadius: "16px",
        padding: "20px",
      }}
    >
      <Typography>Hello {name}, click here to start</Typography>
    </Card>
  );
}

export default Welcome;
