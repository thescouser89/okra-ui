import React from "react";
import "../App.css";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";

class OKR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: {}
    };
  }

  componentDidMount() {
    const apiUrl = "https://api.github.com/users/hacktivist123/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({test: data[0]}));
  }

  render() {
    const { test } = this.state;
    return (
      <Box>
        <h1>
          OKR title <LinearProgress variant="determinate" value="60" />
        </h1>
        <hr />
        <h2>KR 1</h2>
        <h2>KR 2</h2>
        <h2>{test.full_name}</h2>
      </Box>
    );
  }
}

export default OKR;
