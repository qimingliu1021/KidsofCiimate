import Greetings from "./aWelcome/Greetings";
import Name from "./aWelcome/Name";
import HelloName from "./aWelcome/HelloName";
import WeatherLearning from "./bWeatherLearning/WeatherLearning";
import ClimateLearning from "./cClimatesLearning/ClimateLearning";
import { useState } from "react";
import ExtremeWeathers from "./bWeatherLearning/ExtremeWeathers";
import LearningSum from "./eLearningSum/LearningSum";
import ClimateTypes from "./cClimatesLearning/ClimateTypes";
import TheEnd from "./kTheEnd/TheEnd";
import {
  palette,
  Box,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // This will apply to all buttons
          fontWeight: "bold",
          fontSize: "1.2rem", // Larger font size for readability
          textTransform: "none", // Removes uppercase transformation for a more casual look
          borderRadius: 20, // More pronounced rounded corners
          padding: "12px 24px", // Larger padding for a chunkier look
          backgroundColor: "#f4d35e", // Bright, friendly yellow background
          color: "#336699", // Contrasting text color
          "&:hover": {
            // Hover state for interactivity
            backgroundColor: "#f5a623", // A different shade when hovering
            transform: "scale(1.05)", // Slightly enlarge button on hover
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)", // Soft shadow for depth
          },
          transition: "transform 0.2s ease-in-out, background-color 0.2s", // Smooth transition for scale and background color
          // Add other general styles you want for cartoonish buttons
        },
      },
    },
  },
  typography: {
    fontFamily: ["'Caveat', cursive"].join(","),
    fontSize: 32,
  },
  palette: {
    primary: {
      main: "#73BDF8",
    },
    h1: {
      fontSize: "2.2rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#333", // Just an example, you can set any property
    },
  },
});

function App() {
  const [page, setPage] = useState("greetings");
  const [playerId, setPlayerId] = useState(null);

  const [userName, setUserName] = useState("");

  const toNamePage = (id) => {
    setPlayerId(id);
    setPage("name");
  };

  const toHelloName = (name) => {
    setUserName(name);
    setPage("helloName");
  };

  const toWeatherLearning = () => {
    setPage("weatherLearning");
  };

  const toExtremeWeathers = () => {
    setPage("extremeWeathers");
  };

  const toClimateLearning = () => {
    setPage("climateLearning");
  };

  const toClimateTypes = () => {
    setPage("climateTypes");
  };

  const toLearningSum = () => {
    setPage("learningSum");
  };

  const toTheEnd = () => {
    setPage("theEnd");
  };

  const exitGame = () => {
    setPage("exit");
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        {page === "greetings" && <Greetings toNamePage={toNamePage} />}
        {page === "name" && (
          <Name toHelloName={toHelloName} playerId={playerId} />
        )}
        {page === "helloName" && (
          <HelloName name={userName} toWeatherLearning={toWeatherLearning} />
        )}
        {page === "weatherLearning" && (
          <WeatherLearning toExtremeWeathers={toExtremeWeathers} />
        )}
        {page === "extremeWeathers" && (
          <ExtremeWeathers toClimateLearning={toClimateLearning} />
        )}
        {page === "climateLearning" && (
          <ClimateLearning toClimateTypes={toClimateTypes} />
        )}
        {page === "climateTypes" && (
          <ClimateTypes toLearningSum={toLearningSum} />
        )}
        {page === "learningSum" && <LearningSum toTheEnd={toTheEnd} />}
        {page === "theEnd" && <TheEnd exitGame={exitGame} />}
      </ThemeProvider>
    </Box>
  );
}

export default App;
