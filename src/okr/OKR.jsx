import React from "react";
import "../App.css";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

function OKR() {
  return (
    <Box>
      <h1>
        OKR title <LinearProgress variant="determinate" value="60" />
      </h1>
      <hr />
      <h2>KR 1</h2>
      <h2>KR 2</h2>
    </Box>
  );
}

export default OKR;
