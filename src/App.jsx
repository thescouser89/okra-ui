import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import OKR from "./okr/OKR";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello worldi</p>
        <Box>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <Card>
            <CardContent>hello</CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
        <OKR />
      </header>
    </div>
  );
}

export default App;
