import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
// Material UI imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  invisibleSeparator: {
    border: "none",
    margin: 4,
  },
};

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
                  <div className={classes.commentData}>
                    <Typography
                      variant="h5"
                      component={Link}
                      to={`/users/${userHandle}`}
                      color="primary"
                    >
                      {userHandle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                    </Typography>
                    <hr className={classes.invisibleSeparator} />
                  </div>
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
