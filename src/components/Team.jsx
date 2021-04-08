import React, { useEffect, useState } from "react";
import "App.css";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Team() {
  const { id } = useParams();
  const [data, setData] = useState({ id: 1 });
  const [quarters, setQuarters] = useState([{ id: 1 }]);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/v1/team/${id}`;
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });

    const apiQuarterUrl = `http://localhost:8080/v1/team/${id}/quarters`;
    axios.get(apiQuarterUrl).then((response) => {
      setQuarters(response.data);
    });
  }, []);

  return (
    <Box>
      <p>Id: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Description {data.description}</p>

      <h1>Quarters</h1>
      <ul>
        {quarters.map((quarter) => (
          <div>
            <li>
              <Link to={`/quarter/${quarter.id}`}>
                {quarter.id}: {quarter.name}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </Box>
  );
}
