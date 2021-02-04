import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Scream from "../components/Scream";

class Home extends Component {
  state = {
    screams: null,
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => <Scream scream={scream} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>
            PROFILE - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis semper magna non pellentesque bibendum. Phasellus sagittis, sem
            id tempus varius, nunc velit consequat turpis, lobortis placerat leo
            elit a neque. Fusce a varius nulla. Sed placerat ac orci ut aliquet.
            Vestibulum pellentesque nibh a orci finibus dapibus.
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
