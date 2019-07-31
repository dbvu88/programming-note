import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./prism.css";
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

import Prism from "prismjs";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Code"].join(",")
  }
});

class App extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
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
                    What is Promise.All()?
                  </Typography>
                  <Typography>
                    1. <code>Promise.All()</code> allows us to execute multiple
                    Promises inside an array:
                  </Typography>
                  {/* <textarea> */}
                  <pre>
                    <code className="language-javascript">
                      {`Promise.all([ 
  new Promise(resolve => resolve("chicken")), 
  new Promise(resolve => resolve("duck")), 
  new Promise(resolve => resolve("cow")), 
  new Promise(resolve => resolve("dog")), 
  new Promise(resolve => resolve("cat")) 
]).then(result => console.log(result));`}
                    </code>
                  </pre>
                  {/* </textarea> */}
                  <Typography>
                    When every Promise in the array is done executing, it will
                    either resolve in an array of results or reject a single
                    error at once.
                  </Typography>
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
                  <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper>
                  <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper>
                  <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia
                    bibendum nulla sed consectetur.
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
}

export default App;
