import React, { useEffect, useState } from "react";
import "App.css";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";

function OKR() {
  const [data, setData] = useState([{ id: 1 }]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/v1/team";
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  });

  return (
    <Box>
      <h1>
        OKR title <LinearProgress variant="determinate" value="60" />
      </h1>
      <hr />
      <h2>KR 1</h2>
      <h2>KR 2</h2>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </Box>
  );
}

export default OKR;
