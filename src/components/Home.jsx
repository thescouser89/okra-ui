import React, { useEffect, useState } from "react";
import "App.css";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([{ id: 1 }]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/v1/team";
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Box>
      <ul>
        {data.map((item) => (
          <li>
            <Link to={`/team/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}
