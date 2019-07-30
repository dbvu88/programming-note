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
          <Typography variant="h6">Learn To Code</Typography>
        </Toolbar>
        <Container
          className="container"
          // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={0} className="post">
                <Typography variant="h6" gutterBottom>
                  How to Use Promise.All()
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis
                  consectetur purus sit amet fermentum. Aenean lacinia bibendum
                  nulla sed consectetur.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
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
