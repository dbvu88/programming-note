import React from "react";
import RunIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button, Grid, Paper } from "@material-ui/core/";
import {
  Box,
  Hero,
  Navbar,
  Heading,
  Container,
  Columns,
  Card,
  Content,
  Menu
} from "react-bulma-components";

import Prism from "prismjs";

class CodeBlock extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  constructor(props) {
    super(props);
    this.state = {
      output: "_"
    };
  }
  run(snippet) {
    const output = eval(snippet);
    console.log(output);
    // if (output) {
    this.setState({ output: output.toString() });
    // }
  }

  render() {
    const snippet = this.props.snippet;
    console.log(this.state);
    return (
      //   <Container className="code-block">
      <div>
        {/* <Grid item xs={12}> */}
        <pre style={{ background: "black", fontSize: "1em" }}>
          <code className="language-javascript">{snippet}</code>
        </pre>
        {/* </Grid> */}
        {/* <Grid item xs={12} md={2}> */}
        {/* <Button
            onClick={() => this.run(snippet)}
            variant="outlined"
            color="secondary"
          >
            <code>Run Code</code>
            <RunIcon />
          </Button> */}
        {/* </Grid> */}
        {/* <Grid item xs={12} md={10}>
          <Paper elevation={0} className="output">
            <pre>
              <code className="language-javascript">{this.state.output}</code>
            </pre>
          </Paper>
        </Grid> */}
      </div>
    );
  }
}

export default CodeBlock;
