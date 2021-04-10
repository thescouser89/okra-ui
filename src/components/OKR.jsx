import React, { useEffect, useState } from "react";
import "App.css";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

function OKR() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/v1/team";
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Box>
      <h1>
        OKR title <LinearProgress variant="determinate" value="60" />
      </h1>
      <hr />
      <ul>
        {data ? (
          data.map((item) => <li>{item.name}</li>)
        ) : (
          <Skeleton count={5} />
        )}
      </ul>
    </Box>
  );
}

export default OKR;
