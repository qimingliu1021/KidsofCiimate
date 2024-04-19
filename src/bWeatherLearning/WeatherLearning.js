import React, { useState } from "react";
import { Grid, Box, Typography, Button, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Image imports
import cloudyImage from "./img/cloudy.jpg";
import rainyImage from "./img/rainy.jpg";
import sunnyImage from "./img/sunnyday.jpg";
import windyImage from "./img/windy.jpg";
import snowyImage from "./img/snowy.jpg";
import rainbowImage from "./img/rainbow.jpg";

function WeatherLearning({ toExtremeWeathers }) {
  const theme = useTheme();
  const [selectedWeather, setSelectedWeather] = useState("");

  // Descriptions and images mapping
  const weatherInfo = {
    cloudy: {
      description:
        "When 6/8th to 7/8ths of the sky is covered by opaque (not transparent) clouds.",
      image: cloudyImage,
    },
    rainy: {
      description:
        "A period of 24 hours, normally commencing at 0900 UTC, in which at least 0.01 in. or 0.2 mm of precipitation is recorded.",
      image: rainyImage,
    },
    sunny: {
      description:
        "When there are no opaque (not transparent) clouds. Same as Clear.",
      image: sunnyImage,
    },
    windy: {
      description: "20 to 30 mph winds.",
      image: windyImage,
    },
    snowy: {
      description:
        // sources: https://snow.dc.gov/page/weather-terms-you-should-know
        "snow falling. From light to heavy can be described as flurries, showers, squalls and blowing",
      image: snowyImage,
    },
    rainbow: {
      description:
        "Any one of a family of large, colored, circular (or nearly circular) arcs formed by light (usually sunlight) falling on a population of water drops such as provided by rain, cloud, fog, or spray",
      image: rainbowImage,
    },
  };

  const handleClick = (weather) => {
    setSelectedWeather(selectedWeather === weather ? "" : weather); // Toggle visibility
  };

  return (
    <Card
      sx={{
        marginTop: "3rem",
        marginLeft: "auto",
        marginRight: "auto",
        height: 700,
        maxWidth: 1000,
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        borderRadius: "16px",
        padding: "20px",
        display: "flex", // Added for flex layout
        flexDirection: "column", // Stack children vertically
        alignItems: "center", // Optional: Adjust the margin top as needed
      }}
    >
      <Box
        sx={{
          background: theme.palette.primary.main,
          padding: 2,
          width: "100%", // Adjust width as necessary
          flexGrow: 1, // Allows box to grow to fill available space
          overflowY: "auto",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {Object.entries(weatherInfo).map(([weather, info]) => (
            <Grid item xs={6} sm={4} key={weather}>
              <Button
                onClick={() => handleClick(weather)}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={info.image}
                  alt={`${weather} Weather`}
                  style={{ width: 100, height: 100 }}
                />
              </Button>
            </Grid>
          ))}
        </Grid>
        {selectedWeather && (
          <Box mt={3} sx={{ textAlign: "center" }}>
            <Typography>{weatherInfo[selectedWeather].description}</Typography>
          </Box>
        )}
      </Box>
      <Button onClick={toExtremeWeathers} sx={{ mt: 2, alignSelf: "center" }}>
        &#8594; Go to Climate Learning
      </Button>
    </Card>
  );
}

export default WeatherLearning;
