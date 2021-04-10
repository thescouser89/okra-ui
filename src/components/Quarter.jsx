import React, { useEffect, useState } from "react";
import "App.css";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Quarter() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [okrs, setOKRs] = useState(null);

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
      {data ? (
        <div>
          <p>Id: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Description {data.description}</p>
        </div>
      ) : (
        <Skeleton count={5} />
      )}

      <h1>OKRs</h1>
      <ul>
        {okrs ? (
          okrs.map((okr) => (
            <div>
              <li>
                {okr.name}: {okr.description}
              </li>
            </div>
          ))
        ) : (
          <Skeleton count={5} />
        )}
      </ul>
    </Box>
  );
}
