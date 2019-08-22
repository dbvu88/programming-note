import React from "react";
import brand from "./";
// import "./App.css";
import { Route, NavLink } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CodeBlock from "./CodeBlock";
import {
  AppBar,
  // Container,
  Typography,
  Toolbar,
  Grid,
  Paper,
  CssBaseline
} from "@material-ui/core/";

import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Hero,
  Navbar,
  Heading,
  Container,
  Columns,
  Card,
  Content,
  Message,
  Section,
  Menu
} from "react-bulma-components";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Code"].join(",")
  }
});

class App extends React.Component {
  // componentDidMount() {
  //   Prism.highlightAll();
  // }

  render() {
    return (
      <Hero size="fullheight" color="dark">
        <Hero.Head renderAs="header">
          <Navbar>
            <Container>
              <Navbar.Brand>
                <Navbar.Item>
                  <Heading size={4}>>_ learn to code</Heading>
                </Navbar.Item>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Hero.Head>
        <Hero.Body style={{ alignItems: "start" }}>
          {/* <Section> */}
          <Container>
            <Columns>
              <Columns.Column size="one-quarter">Articles</Columns.Column>
              <Columns.Column>
                <Message color="info">
                  <Message.Header>Introducing Promise.All()</Message.Header>
                  <Message.Body>
                    <Content>
                      <p>Overview:</p>
                      <CodeBlock
                        snippet={`Promise.all([
  new Promise(resolve => resolve("chicken")), 
  new Promise(resolve => resolve("duck")), 
  new Promise(resolve => resolve("cow")), 
  new Promise(resolve => resolve("dog")), 
  new Promise(resolve => resolve("cat"))
]).then(result => result);`}
                      />
                    </Content>
                  </Message.Body>
                </Message>
              </Columns.Column>
            </Columns>
          </Container>
          {/* </Section> */}
        </Hero.Body>
        {/* <Toolbar className="tool-bar">
            <Typography variant="h6" />
          </Toolbar>
          <Container className="container">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper elevation={1} className="post">
                  <Typography variant="h6" gutterBottom />
                  <Typography>
                    1. <code>Promise.All()</code> allows us to execute multiple
                    Promises inside an array:
                  </Typography>

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
            </Grid> */}
        {/* </Container> */}
      </Hero>
    );
  }
}

export default App;
