import React from "react";
import { Route, NavLink } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { AppBar, Container, Typography, Toolbar } from "@material-ui/core/";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Fira Code"].join(",")
  }
});

function App() {
  return [
    <AppBar className="app-bar">
      <ThemeProvider theme={theme}>
        <Toolbar>
          <Typography variant="h6">Duc's Programming Note</Typography>{" "}
        </Toolbar>
      </ThemeProvider>
    </AppBar>,
    <Container
      className="container"
      // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      {/* <Toolbar> */}
      {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
      {/* <Button color="inherit">Login</Button> */}
      {/* </Toolbar> */}
    </Container>
  ];
}

export default App;
