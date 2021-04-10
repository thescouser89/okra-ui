import React, { useEffect, useState } from "react";
import "App.css";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/v1/team";
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Box>
      <h1>Teams</h1>
      <ul>
        {data ? (
          data.map((item) => (
            <li>
              <Link to={`/team/${item.id}`}>{item.name}</Link>
            </li>
          ))
        ) : (
          <Skeleton count={5} />
        )}
      </ul>
    </Box>
  );
}
