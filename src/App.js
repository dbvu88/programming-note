import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Grid,
  Paper
} from "@material-ui/core/";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Code"].join(",")
  }
});

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Toolbar className="tool-bar">
          <Typography variant="h6">_Learn To Code</Typography>
        </Toolbar>
        <Container className="container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={1} className="post">
                <Typography variant="h6" gutterBottom>
                  Examples of Promise.All()
                </Typography>
                <Typography>
                  <pre>
                    {`const users = [
  {
    user_id: 1,
    username: "the_lonely_guy"
  },
  { 
    user_id: 2,
    username: "awesome_person"
  },
  {
    user_id: 3,
    username: "someone_you_used_to_know"
  }
];`}
                  </pre>
                </Typography>
                <Typography>
                  <div className="code-container" />

                  <p>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                  </p>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis
                  consectetur purus sit amet fermentum. Aenean lacinia bibendum
                  nulla sed consectetur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis
                  consectetur purus sit amet fermentum. Aenean lacinia bibendum
                  nulla sed consectetur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
