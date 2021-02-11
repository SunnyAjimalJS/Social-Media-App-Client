import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffef62",
      main: "#ffeb3b",
      dark: "#b2a429",
      contrastText: "#464a12",
    },
    secondary: {
      light: "#838848",
      main: "#646b1b",
      dark: "#464a12",
      contrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const token = localStorage.FBIdToken;
if (token) {
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
