import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {};

class Comments extends Component {
  render() {
    const { classes, comments } = this.props;
    return (
      <Grid container>
        {comments.map((comment) => {
          const { body, createdAt, userImage, userHandle } = comment;
          <Fragment key={createdAt}>
            <Grid item sm={12}>
              <Grid container>
                <Grid item sm={2}>
                  <img
                    src={userImage}
                    alt="comment"
                    className={classes.commmentImage}
                  />
                </Grid>
                <Grid item sm={9}>
                  <div className={classes.commentData}></div>
                </Grid>
              </Grid>
            </Grid>
          </Fragment>;
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default withStyles(styles)(Comments);
