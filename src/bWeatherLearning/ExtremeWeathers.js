import React from "react";
import { Grid, Box, Typography, Button, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Remaining Image imports
import draughtImage from "./img/draught.jpg";
import extremecoldImage from "./img/extremecold.jpg";
import extremehotImage from "./img/extremehot.jpg";
import extremerainfallImage from "./img/extremerainfall.jpg";
import tornadoImage from "./img/tornado.jpg";
import wildfireImage from "./img/wildfire.jpg";

function ExtremeWeathers({ toClimateLearning }) {
  const theme = useTheme();

  // Descriptions for extreme weathers, you can customize this part
  const extremeWeatherInfo = {
    draught: {
      description:
        "Draughts: Long periods without rain leading to a shortage of water.",
      image: draughtImage,
    },
    extremecold: {
      description:
        "Extreme cold: Very low temperatures that can cause environmental and health problems.",
      image: extremecoldImage,
    },
    extremehot: {
      description:
        "Extreme hot: Very high temperatures that can lead to heatwaves.",
      image: extremehotImage,
    },
    extremerainfall: {
      description:
        "Extreme Rainfall: Significantly higher than average amounts of rain.",
      image: extremerainfallImage,
    },
    tornado: {
      description:
        "Tropical Cyclones: A rapidly rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud or, in rare cases, the base of a cumulus cloud.",
      image: tornadoImage,
    },
    wildfire: {
      description:
        "Wildfires: Large fires that spread quickly over natural areas.",
      image: wildfireImage,
    },
  };

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
        <Box
          sx={{
            background: theme.palette.primary.main,
            padding: 2,
            width: "100%",
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {Object.entries(extremeWeatherInfo).map(([weather, info]) => (
              <Grid item xs={6} sm={4} key={weather}>
                <img
                  src={info.image}
                  alt={`${weather} Weather`}
                  style={{
                    width: 200,
                    height: 200,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Typography sx={{ fontSize: 22, textAlign: "center", mb: 2 }}>
                  {info.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Button onClick={toClimateLearning} variant="contained" sx={{ mt: 2 }}>
          next &#8594;
        </Button>
      </Card>
    </Box>
  );
}

export default ExtremeWeathers;
