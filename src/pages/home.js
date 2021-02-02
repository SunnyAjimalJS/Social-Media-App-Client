import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Home extends Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={8} xs={12}>
          <h4>Screams</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
            magna non pellentesque bibendum. Phasellus sagittis, sem id tempus
            varius, nunc velit consequat turpis, lobortis placerat leo elit a
            neque. Fusce a varius nulla. Sed placerat ac orci ut aliquet.
            Vestibulum pellentesque nibh a orci finibus dapibus. Vivamus
            lobortis dolor id vehicula lacinia. Praesent commodo semper
            consectetur. Sed lacinia nisi a sem tristique, efficitur luctus orci
            feugiat. Cras ut fringilla elit. Sed feugiat tortor a mi pretium
            mattis. Cras sagittis et velit eget luctus. Donec ac lectus
            vulputate, iaculis augue vel, sodales purus. Mauris congue at turpis
            non dictum. Aliquam a maximus urna.
          </p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <h4>Profile</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper
            magna non pellentesque bibendum. Phasellus sagittis, sem id tempus
            varius, nunc velit consequat turpis, lobortis placerat leo elit a
            neque. Fusce a varius nulla. Sed placerat ac orci ut aliquet.
            Vestibulum pellentesque nibh a orci finibus dapibus.
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
