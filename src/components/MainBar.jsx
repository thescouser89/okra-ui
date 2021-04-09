import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { useKeycloak } from '@react-keycloak/web';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function MainBar() {
  const { keycloak, } = useKeycloak()
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Okra
          </Typography>
          { keycloak && !keycloak.authenticated &&
          <Button color="inherit" variant="outlined" onClick={() => keycloak.login()}>
            Login 
          </Button>
          }
          { keycloak && keycloak.authenticated &&
          <Button color="inherit" variant="outlined" onClick={() => keycloak.logout()}>
            Logout 
          </Button>
          }
          <div>Welcome, {keycloak.authenticated && keycloak.idTokenParsed.preferred_username}</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainBar;
