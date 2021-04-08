import React, { useEffect, useState } from "react";
import "App.css";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Quarter() {
  const { id } = useParams();
  const [data, setData] = useState({ id: 1 });
  const [okrs, setOKRs] = useState([{ id: 1 }]);

  useEffect(() => {
    const apiUrl = `http://localhost:8080/v1/quarter/${id}`;
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });

    const apiOKRUrl = `http://localhost:8080/v1/quarter/${id}/okrs`;
    axios.get(apiOKRUrl).then((response) => {
      setOKRs(response.data);
    });
  }, []);

  return (
    <Box>
      <p>Id: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Description {data.description}</p>

      <h1>OKRs</h1>
      <ul>
        {okrs.map((okr) => (
          <div>
            <li>
              {okr.name}: {okr.description}
            </li>
          </div>
        ))}
      </ul>
    </Box>
  );
}
