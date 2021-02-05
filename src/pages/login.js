import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  formGrid: {
    textAlign: "center",
  },
};

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.formGrid}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="App Icon" />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
